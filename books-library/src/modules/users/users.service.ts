import { Injectable } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";
import { GenerateHashService } from "src/modules/auth/generate-hash.service";
import { CreateUserDto } from "./interfaces/user-create.interface";
import { User, UserDocument } from "./mongo.schemas/user.schema";

@Injectable()
export class UsersService {
    constructor(
      @InjectModel(User.name) private UserModel: Model<UserDocument>,
      @InjectConnection() private connection: Connection,
      private hashService: GenerateHashService,
    ) {}

    public async create(data: CreateUserDto): Promise<UserDocument> {
        data.password = this.hashService.generate(data.password);
        const user = new this.UserModel(data);
        try {
            await user.save();
            return user;
        } catch (e) {
            console.error(e);
            throw new Error("Ошибка при создании пользователя: указаны неверные данные или такой пользователь уже есть")
        }
    }

    async findOne(filters: any): Promise<UserDocument | undefined> {
        return await this.UserModel.findOne(filters).select('-__v').exec();
    }
}
