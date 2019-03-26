import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-restaurants',
  templateUrl: './display-restaurants.component.html',
  styleUrls: ['./display-restaurants.component.css']
})
export class DisplayRestaurantsComponent  {
  public _data
  constructor() { }

  ngOnInit() {
  }

  @Input()
    set data(stuff: any){
      this._data = stuff
    }
    get data() : any {
      return this._data
    }
}
