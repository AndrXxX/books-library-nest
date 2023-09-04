import { IsDefined, IsString, Length } from "class-validator";

export class CreateBookCommentDto {
  @IsDefined() @IsString()
  bookId: string;

  @IsDefined() @IsString() @Length(3)
  comment: string;
}
