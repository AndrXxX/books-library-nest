import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { CreateBookCommentDto } from "src/modules/book-comments/dto/book-comment-create.dto";
import { DtoValidationPipe } from "src/validators/dto.validation.pipe";
import { IdValidationPipe } from "src/validators/id.validation.pipe";
import { BookCommentsService } from "./modules/book-comments/book-comments.service";

@WebSocketGateway({ cors: true })
export class AppGateway {
  constructor(
    private readonly commentsService: BookCommentsService,
  ) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('getAllComments')
  async getAllComments(@MessageBody("bookId", IdValidationPipe) bookId: string) {
    return await this.commentsService.findAllBookComment(bookId);
  }

  @SubscribeMessage('addComment')
  async addComment(@MessageBody(DtoValidationPipe) createCommentDto: CreateBookCommentDto) {
    return await this.commentsService.create(createCommentDto);
  }
}
