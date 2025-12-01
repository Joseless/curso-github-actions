import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property, CreateLeadDto } from '../models/property.model';

@Injectable({
  providedIn: 'root',
})
export class PropertiesService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getProperties(filters?: {
    city?: string;
    zone?: string;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    status?: string;
    orderBy?: string;
  }): Observable<Property[]> {
    let params = new HttpParams();
    
    if (filters) {
      Object.keys(filters).forEach((key) => {
        const value = filters[key as keyof typeof filters];
        if (value !== undefined && value !== null && value !== '') {
          params = params.set(key, value.toString());
        }
      });
    }

    return this.http.get<Property[]>(`${this.apiUrl}/properties`, { params });
  }

  getPropertyBySlug(slug: string): Observable<Property> {
    return this.http.get<Property>(`${this.apiUrl}/properties/${slug}`);
  }

  createLead(lead: CreateLeadDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/leads`, lead);
  }
}

