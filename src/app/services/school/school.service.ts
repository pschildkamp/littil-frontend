import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { School } from '../../model/school';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  private uri = 'api/v1/school';

  constructor(private http: HttpClient) {}

  get(id: string): Observable<School> {
    return this.http.get<School>(`${this.uri}/${id}`);
  }

  create(school: School): Observable<number> {
    return this.http.post(this.uri,school, { observe: 'response' })
      .pipe(map(data => data.status));
    // TODO: the documented response json {'message': 'School created'}
  }
}
