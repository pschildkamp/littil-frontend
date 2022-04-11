import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeacherCreate, TeacherUpdate } from "./model/teacher";
import { Observable,EMPTY } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  create(teacher: TeacherCreate): Observable<string> {
    return EMPTY;
  }

  update(teacher: TeacherUpdate): Observable<string> {
    return EMPTY;
  }
}
