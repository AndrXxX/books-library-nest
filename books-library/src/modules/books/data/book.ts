import { iBook } from "src/interfaces/book.interface";

export class Book implements iBook {
  title: string;
  description?: string;
}
