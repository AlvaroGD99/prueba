import { JsonPipe } from '@angular/common';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Banda, BandasService } from 'src/app/services/bandas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Output() onDelete: EventEmitter<void>
  banda:Banda;
  bandasTotales=[];
  contador:number;
  posicion:number;
  id:any
  safeCancion1:string;
  safeCancion2:string;
  safeCancion3:string
  constructor(private bandasService: BandasService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { 
     
      this.bandasTotales=JSON.parse(localStorage.getItem('bandas'));
      this.contador=0;
    }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      // params SIEMPRE me devuelve los valores en formato STRING
      this.id = parseInt(params.bandaId);
      this.banda = await this.bandasService.getById(this.id);
    });
  }
 
  eliminarBanda(){
    for(let bandaActual of this.bandasTotales){
      this.contador++;
      if(bandaActual.id==this.banda.id){
        this.posicion=this.contador  
      }
    }
    this.contador=0
    this.bandasTotales.splice((this.posicion-1),1)
    console.log(this.bandasTotales);
    localStorage.setItem('bandas',JSON.stringify(this.bandasTotales))
    this.router.navigate([''])
  }
}
