import { Component, OnInit } from '@angular/core';
import { HotelesService } from '../../servicios/hoteles.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html'
})
export class HotelesComponent implements OnInit {

    hoteles:any[] = [];

    constructor( private _hotelesService:HotelesService,
                 private router:Router
    ) {

    }

    ngOnInit() {
        this.hoteles = this._hotelesService.getHoteles();
        console.log(this.hoteles);
    }

    verHotel( idx:number){
        this.router.navigate( ['/hotel',idx] );
    }
    

}
