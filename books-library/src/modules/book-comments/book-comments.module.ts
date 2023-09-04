import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { BookCommentsService } from "./book-comments.service";
import { BookComment, BookCommentSchema } from "./mongo.schemas/book-comment.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BookComment.name, schema: BookCommentSchema },
    ]),
  ],
  providers: [BookCommentsService],
  exports: [BookCommentsService],
})
export class BookCommentsModule {

}
