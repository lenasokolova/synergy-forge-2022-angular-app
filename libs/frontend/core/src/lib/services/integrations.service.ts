import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IIntegration } from '../types/integration';
import { IIntegrationFull } from './../types/integrationFull';

@Injectable()
export class IntegrationsService {
  apiUrl = 'http://localhost:3333/api/integrations';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IIntegration[]> {
    return this.http.get(this.apiUrl) as Observable<IIntegration[]>;
  }

  getOneFull(id:number): Observable<IIntegrationFull[]> {
    return this.http.get<IIntegrationFull[]>(`${this.apiUrl}/${id}/full`);
  }
}
