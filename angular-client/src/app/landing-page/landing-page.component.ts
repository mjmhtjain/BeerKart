import { Component, OnInit } from '@angular/core';
import { LandingPageService } from './landing-page.service';
import { Inventory, InventoryClass } from '../interfaces/Inventory';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  private inventory: InventoryClass[] = [];

  constructor(private landingPageService: LandingPageService) { }

  ngOnInit() {
    this.fetchInventory();
  }

  fetchInventory() {
    this.landingPageService.fetchInventory().subscribe(res => {
      if (res['success']) {
        this.inventory = res['data'];
        console.log(this.inventory);
      } else {
        console.log(`request failed: $(res['message'])`);
      }

    }, err => {
      console.log(err);
    })
  }

}
