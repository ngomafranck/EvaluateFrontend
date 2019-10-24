import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HotelService} from '../services/hotel.service';
import {HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  public hotels:any;
  constructor(private hotService:HotelService) { }

  ngOnInit() {

  }
  onGetHostels(){
  this.hotService.getHotels()
   .subscribe(data=>{
   this.hotels=data;
  }, err=>{
  console.log(err);
  })
  }
  onChercher(value:any){
    console.log(value);
  }

}


