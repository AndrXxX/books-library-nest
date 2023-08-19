import { Injectable } from '@nestjs/common';
import axios from "axios";
import { firstValueFrom, from, map, merge, mergeAll, take, toArray } from "rxjs";

@Injectable()
export class RxjsExampleService {
  private readonly githubUrl = 'https://api.github.com/search/repositories?q=';
  private readonly gitlabUrl = 'https://gitlab.com/api/v4/projects?search=';

  public async searchRepo(text: string): Promise<any> {
    const data$ = merge(this.getGithubStream(text, 5), this.getGitlabStream(text, 5))
      .pipe(toArray());
    data$.subscribe(() => {});
    return await firstValueFrom(data$);
  }

  private getGithubStream(text: string, count: number) {
    return from(axios.get(`${this.githubUrl}${text}`))
      .pipe(map((response: any) => (response.data.items)), mergeAll())
      .pipe(map((item: any) => ({ title: item.name, url: item.html_url, source: "github" })))
      .pipe(take(count));
  }

  private getGitlabStream(text: string, count: number) {
    return from(axios.get(`${this.gitlabUrl}${text}`))
      .pipe(map((response: any) => (response.data)), mergeAll())
      .pipe(map((item: any) => ({ title: item.name, url: item.web_url, source: "gitlab" })))
      .pipe(take(count))
  }

}
