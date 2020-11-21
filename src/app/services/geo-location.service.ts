import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {

  constructor(private http: HttpClient) { }


  findAdress(latitude, longitude) {
    return this.http.get<any>(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${longitude}%2C${latitude}`);
  }
}
