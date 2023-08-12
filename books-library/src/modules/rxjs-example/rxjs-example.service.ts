import { Injectable } from '@nestjs/common';

@Injectable()
export class RxjsExampleService {

  public async searchGitlab(text: string): Promise<any> {
    return { text: text };
  }

}
