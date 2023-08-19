import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";
import { iCreateUserDto } from "./interfaces/user-create.interface";
import { User, UserDocument } from "./mongo.schemas/user.schema";

@Injectable()
export class UsersService {
    constructor(
      @InjectModel(User.name) private UserModel: Model<UserDocument>,
      @InjectConnection() private connection: Connection,
    ) {}

    public async create(data: iCreateUserDto): Promise<UserDocument> {
        const user = new this.UserModel(data);
        try {
            await user.save();
        } catch (e) {
            console.error(e);
        }
        return user;
    }

    async findOne(id: number): Promise<UserDocument | undefined> {
        return await this.UserModel.findOne({ id }).select('-__v').exec();
    }
}
