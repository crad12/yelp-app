import { Component, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public _restaurant = {}
  dropdown: string;
  business = null;
  location: string='';
  price: number;
  rating = [ '⭐️', '⭐️⭐️', '⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️', '⭐️⭐️⭐️⭐️⭐️' ]

  constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this._restaurant['rating'] = this.rating[this._restaurant['rating'] -1 ]
// }

// @Input() set restaurant(book: any) {
//   this._restaurant = this.restaurant;
// }

// get restaurant() : any {
//   return this._restaurant;
// }

  onClick(event) {
      this.http.get<any>(`https://aw-yelp-api.herokuapp.com`, {
        params: new HttpParams().set('location', this.location).set('price' , this.dropdown)
      })
        .subscribe(business => {
          console.log(business)
          this.business = business;
        })
  }
}
