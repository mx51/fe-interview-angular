import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Adding an Auth token could happen here
        req = req.clone({
            withCredentials: true,
            setHeaders: {
                Authorization: `Example Token`
            }
        });

        return next.handle(req);
    }
    
}