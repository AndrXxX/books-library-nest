import { Injectable } from '@nestjs/common';
import axios from "axios";
import { from, map, merge, take } from "rxjs";

@Injectable()
export class RxjsExampleService {
  private readonly githubUrl = 'https://api.github.com/search/repositories?q=';
  private readonly gitlabUrl = 'https://gitlab.com/api/v4/projects?search=';

  public async searchRepo(text: string): Promise<any> {
    const firstSource$ = from((await axios.get(`${this.githubUrl}${text}`)).data.items)
      .pipe(map((item: any) => ({ title: item.name, url: item.html_url, source: "github" })))
      .pipe(take(5));
    const secondSource$ = from((await axios.get(`${this.gitlabUrl}${text}`)).data)
      .pipe(map((item: any) => ({ title: item.name, url: item.web_url, source: "gitlab" })))
      .pipe(take(5))
    const common$ = merge(firstSource$, secondSource$);
    const items = [];
    common$.subscribe((value) => items.push(value));
    return items;
  }

}
