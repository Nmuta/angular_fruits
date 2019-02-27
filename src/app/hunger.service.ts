import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HungerService {

  public fruitStash:any;

  constructor(private http:HttpClient) { 
  }

  getData(){
    return this.http.get('https://cors-anywhere.herokuapp.com/http://flimsy-good-bye.surge.sh/fruits.json')
  }
}
