import { IsArray, IsDefined, IsOptional, IsString, Length } from "class-validator";

export class UpdateBookDto {
  @Length(10, 20) @IsDefined() @IsString()
  title: string;

  @IsOptional() @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  authors?: string[];

  @IsOptional() @IsString()
  favorite?: string;

  @IsOptional() @IsString()
  fileCover?: string;

  @IsOptional() @IsString()
  fileName?: string;
}
