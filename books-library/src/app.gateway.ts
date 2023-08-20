import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { BookCommentsService } from "./modules/book-comments/book-comments.service";

@WebSocketGateway({ cors: true })
export class AppGateway {
  constructor(
    private readonly commentsService: BookCommentsService,
  ) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('getAllComments')
  async handleMessage(@MessageBody() bookId: string) {
    return await this.commentsService.findAllBookComment(bookId);
  }
}
