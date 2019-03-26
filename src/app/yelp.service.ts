
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://api.yelp.com/v3/businesses/search?'
const API_KEY = 'JE7aCFSjTUp1Z7H7nHcNNB2fgpMTnlT2GkA60F4FAr_mtczu17Y7JGhZbVVplWN4BLevX1mxwwiJZzetWWBPM_7IEdMNwVsPEZrQhkhbun2RvX9qndJ24eGawXaaXHYx'

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  constructor(private http: HttpClient) { }

  
}
