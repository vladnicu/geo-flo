import { Component, OnInit } from '@angular/core';
import { GeoLocationService } from './services/geo-location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reverse-geo-coding';

  longitude = '-117.20541';
  latitude = '34.038074';

  result;
  constructor(private geoLocationService: GeoLocationService) {

  }

  findLocation() {
    this.geoLocationService.findAdress(this.longitude, this.latitude).subscribe( res => console.log(this.result = res));
  }

  ngOnInit() {
   
  }
  
}
