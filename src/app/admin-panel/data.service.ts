import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {
    return this.http.get<any[]>('http://api.hangarautos.com/api/arac');
  }

  editArac(aracId: number, arac: any): Observable<any> {
    return this.http.put<any>(
      `http://api.hangarautos.com/api/arac/${aracId}`,
      arac
    );
  }

  deleteArac(aracId: number): Observable<any> {
    return this.http.delete<any>(
      `http://api.hangarautos.com/api/arac/${aracId}`
    );
  }
}
