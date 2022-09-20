import { Component, OnInit } from '@angular/core';
import { P2Service } from '../_services/p2.service'

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.scss']
})
export class P2Component implements OnInit {

  places: any [] = [];

  constructor(
    private p2Service: P2Service,
  ) {}

  ngOnInit(): void {
    this.p2Service.getPlaces().subscribe(data => {
      this.places = data;
      console.log(this.places);
    })
  }
}
