import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Teacher } from "./model/teacher";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(
    private http: HttpClient,
    private uri= 'api/v1/teacher'
  ) { }

  get(id: string): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.uri}/${id}`);
  }

  create(teacher: Teacher): Observable<number> {
    return this.http.post(`${this.uri}`,teacher, { observe: 'response' })
      .pipe(map(data => data.status));
  }

  update(teacher: Teacher): Observable<number> {
    return this.http.put(`${this.uri}/${teacher.id}`,teacher, { observe: 'response' })
      .pipe(map(data => data.status));
  }
}
