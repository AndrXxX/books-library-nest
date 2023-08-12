import { Injectable } from '@nestjs/common';
import axios from "axios";
import { from, map, merge, take } from "rxjs";

@Injectable()
export class RxjsExampleService {
  private readonly githubUrl = 'https://api.github.com/search/repositories?q=';
  private readonly gitlabUrl = 'https://gitlab.com/api/v4/projects?search=';

  public async searchRepo(text: string): Promise<any> {
    const results = [];
    merge(
      await this.getGithubStream(text, 5),
      await this.getGithubStream(text, 5),
    )
      .subscribe((value) => results.push(value));
    return results;
  }

  private async getGithubStream(text: string, count: number) {
    return from((await axios.get(`${this.githubUrl}${text}`)).data.items)
      .pipe(map((item: any) => ({ title: item.name, url: item.html_url, source: "github" })))
      .pipe(take(count));
  }

  private async getGitlabStream(text: string, count: number) {
    return from((await axios.get(`${this.gitlabUrl}${text}`)).data)
      .pipe(map((item: any) => ({ title: item.name, url: item.web_url, source: "gitlab" })))
      .pipe(take(count))
  }

}
