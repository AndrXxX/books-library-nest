import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";
import { CreateUserDto } from "./interfaces/user-create.interface";
import { User, UserDocument } from "./mongo.schemas/user.schema";

@Injectable()
export class UsersService {
    constructor(
      @InjectModel(User.name) private UserModel: Model<UserDocument>,
      @InjectConnection() private connection: Connection,
    ) {}

    public async create(data: CreateUserDto): Promise<UserDocument> {
        const user = new this.UserModel(data);
        try {
            await user.save();
        } catch (e) {
            console.error(e);
        }
        return user;
    }

    async findOne(filters: any): Promise<UserDocument | undefined> {
        return await this.UserModel.findOne(filters).select('-__v').exec();
    }
}
