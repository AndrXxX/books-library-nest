import { Injectable } from '@nestjs/common';
import axios from "axios";
import { from, map, merge, mergeAll, take } from "rxjs";

@Injectable()
export class RxjsExampleService {
  private readonly githubUrl = 'https://api.github.com/search/repositories?q=';
  private readonly gitlabUrl = 'https://gitlab.com/api/v4/projects?search=';

  public async searchRepo(text: string): Promise<any> {
    const results = [];
    const data$ = merge(this.getGithubStream(text, 5), this.getGitlabStream(text, 5));
    data$.subscribe((value) => results.push(value));
    await data$.toPromise(); // TODO
    return results;
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
