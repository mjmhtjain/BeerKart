import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private httpService: HttpService) { }

  fetchInventory() {
    return this.httpService.httpGet('/inventory/fetchInventory');
  }
}
