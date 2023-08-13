import { CallHandler, ExecutionContext, Injectable, NestInterceptor, } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class FormatResponseInterceptorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        tap((data: any) => of({ status: "success", data })),
        catchError((err: any) => of({ status: "fail", data: err?.message || "Ошибка при выполнении запроса" })),
      );
  }

}
