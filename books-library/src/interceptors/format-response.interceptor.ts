import { CallHandler, ExecutionContext, Injectable, NestInterceptor, } from '@nestjs/common';
import { map, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class FormatResponseInterceptorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        map((data: any) => ({ status: "success", data })),
        catchError((err: any) => of({ status: "fail", data: err?.message || "Ошибка при выполнении запроса" })),
      );
  }

}
