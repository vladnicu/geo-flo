import { Component, OnInit } from '@angular/core';
import { GeoLocationService } from './services/geo-location.service';

export interface ICoordinates {
  latitude: string;
  longitude: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'GeoFlo';

  latitude;
  longitude;

  bulkList: string;
  formattedList: ICoordinates[] = [];

  addresses: string[] = [];

  result;

  constructor(private geoLocationService: GeoLocationService) {}

  ngOnInit(): void {}

  findLocation(): void {
    this.geoLocationService
      .findAdress(this.latitude, this.longitude)
      .subscribe((res) => console.log((this.result = res)));
  }

  formatCoordonates(): void {
    const split = this.bulkList.split(',');
    split.forEach((element) => {
      const pariSplit = element.split(' ');
      this.formattedList.push({
        latitude: pariSplit[0],
        longitude: pariSplit[1],
      });
    });

    this.convertToAddress();
  }

  convertToAddress(): void {
    this.formattedList.forEach((element) => {
      this.geoLocationService
        .findAdress(element.latitude, element.longitude)
        .subscribe(
          (res) => {
            this.addresses.push(res.address.Match_addr);
          },
          (err) => alert(err)
        );
    });
  }
}
