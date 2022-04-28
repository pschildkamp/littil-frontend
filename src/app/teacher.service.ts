import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Teacher } from "./model/teacher";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private uri = 'api/v1/teacher';

  constructor(private http: HttpClient) {}

  get(id: string): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.uri}/${id}`);
  }

  create(teacher: Teacher): Observable<number> {
    return this.http.post(this.uri,teacher, { observe: 'response' })
      .pipe(map(data => data.status));
    // TODO: the documented response json {'message': 'Teacher created'}
  }

  update(teacher: Teacher): Observable<number> {
    return this.http.put(this.uri,teacher, { observe: 'response' })
      .pipe(map(data => data.status));
    // TODO: the documented response json {'message': 'Teacher updated'}
  }
}
