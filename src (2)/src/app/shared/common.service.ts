import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private serverurl = environment.url;
  constructor(private http: HttpClient) {}

  postDocument(form: FormData): Observable<Document> {
    // const headers = { 'content-type': 'application/json' };
    return this.http.post<Document>(
      this.serverurl + '/documents/adddocuments',
      form
    );
  }
}
