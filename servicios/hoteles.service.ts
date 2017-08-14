import { Injectable } from '@angular/core';

@Injectable()
export class HotelesService {

    private hoteles:any[] = [
        {
            nombre:"Base Backpackers",
            bio:"Hostel mas caro de la ciudad con accom para 200personas aprox.",
            img:"assets/images/qth.jpg",
            rating:7.8,
            puntuacion:{
                salud:10,
                ubicacion: 7,
                precio:6
            },
            comentarios:{
                1:"Genial ubicacion",
                2:"Excelente predisopcion de los que trabajaban El generte era una bestia",
                3:"Texto de Relleno "
            },
            num:1
        },{
            nombre:"YHA",
            bio:"Hostel 2 Eterno segundon cebollita del base",
            img:"assets/images/qth2.jpg",
            rating:8.2,
            puntuacion:{
                salud:10,
                ubicacion: 7,
                precio:6
            },
            comentarios:{
                1:"Genial ubicacion",
                2:"Excelente predisopcion de los que trabajaban El generte era una bestia",
                3:"Texto de Relleno "
            },
            num:2
        },{
            nombre:"Camping Ground",
            bio:"Camping situado a 200 metros del centro de la ciudad gran vista al lago alguna cosa mas",
            img:"assets/images/qth3.jpg",
            rating:8.2,
            puntuacion:{
                salud:10,
                ubicacion: 7,
                precio:6
            },
            comentarios:{
                1:"Genial ubicacion",
                2:"Excelente predisopcion de los que trabajaban El generte era una bestia",
                3:"Texto de Relleno "
            },
            num:3
        }
    ];

    getHoteles(){
        return this.hoteles;
    }
    getHotel( idx:string){
        return this.hoteles[idx];

    }


    constructor() {
    }

}
