import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  public host:string="http://localhost:8080/hotels"

  constructor(private httpClient:HttpClient) { }

public getHotels() {
   return this.httpClient.get("http://localhost:8080/hotels");
 }
public saveRessource(url, data){
 return this.httpClient.post(url,data);
}

}
