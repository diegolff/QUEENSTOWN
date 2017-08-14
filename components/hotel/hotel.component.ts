import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HotelesService} from '../../servicios/hoteles.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styles: []
})
export class HotelComponent implements OnInit {

    hotel:any = {};

    constructor( private activatedRoute:ActivatedRoute,
                private _hotelesService:HotelesService
                ) {
        this.activatedRoute.params.subscribe(params=>{
            this.hotel = this._hotelesService.getHotel(params['id']);
            console.log(this.hotel);
        })
    }

  ngOnInit() {
  }

}
