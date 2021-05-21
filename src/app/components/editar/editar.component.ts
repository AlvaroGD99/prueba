import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Banda, BandasService } from 'src/app/services/bandas.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
    banda:Banda;
    id:any
    bandaForm: FormGroup;
    bandasTotales:any
    contador:number;
    posicion:number;
    bandaEditada:{}
    ultimaBanda:Object
    constructor(private router:Router,private bandasService: BandasService,
      private activatedRoute: ActivatedRoute) { 
      this.bandaEditada={}
      this.bandasTotales=JSON.parse(localStorage.getItem('bandas'))
      this.bandaForm= new FormGroup({
        nombre: new FormControl('', Validators.required),
        pais: new FormControl('', Validators.required),
        integrantes: new FormControl('', Validators.required),
        discoMasVendido: new FormControl('', Validators.required),
        fechaCreacion: new FormControl('', Validators.required),
        activos: new FormControl('', Validators.required),
        cancion1: new FormControl('', Validators.required),
        cancion2: new FormControl('', Validators.required),
        cancion3: new FormControl('', Validators.required),
        imagen: new FormControl('', Validators.required),
        informacion: new FormControl('', Validators.required),    
    })
    }
  
    ngOnInit(): void {
      this.contador=0;
      console.log(this.bandasTotales);
      this.ultimaBanda=this.bandasTotales[this.bandasTotales.length-1];
      this.activatedRoute.params.subscribe(async params => {
        // params SIEMPRE me devuelve los valores en formato STRING
        this.id = parseInt(params.bandaId);      
        this.banda = await this.bandasService.getById(this.id);
       
        this.bandaForm= new FormGroup({
          nombre: new FormControl(this.banda.nombre.toUpperCase(), Validators.required),
          pais: new FormControl(this.banda.pais.toUpperCase(), Validators.required),
          integrantes: new FormControl(this.banda.integrantes.toUpperCase(), Validators.required),
          discoMasVendido: new FormControl(this.banda.discoMasVendido.toUpperCase(), Validators.required),
          fechaCreacion: new FormControl(this.banda.fechaCreacion.toUpperCase(), Validators.required),
          activos: new FormControl(this.banda.activos.toUpperCase(), Validators.required),
          cancion1: new FormControl(this.banda.cancion1, Validators.required),
          cancion2: new FormControl(this.banda.cancion2, Validators.required),
          cancion3: new FormControl(this.banda.cancion3, Validators.required),
          imagen: new FormControl(this.banda.imagen, Validators.required),
          informacion: new FormControl(this.banda.informacion, Validators.required),    
      })
      });
     
      
    }
  
    editarBanda(){
     
    this.bandaEditada= {
    id: this.banda.id,
    nombre: this.bandaForm.value.nombre.toLowerCase(),
    fechaCreacion: this.bandaForm.value.fechaCreacion,
    imagen: this.bandaForm.value.imagen,
    pais: this.bandaForm.value.pais,
    informacion:this.bandaForm.value.informacion,
    integrantes:this.bandaForm.value.integrantes,
    activos:this.bandaForm.value.activos,
    discoMasVendido:this.bandaForm.value.discoMasVendido,
    cancion1:this.bandaForm.value.cancion1,
    cancion2:this.bandaForm.value.cancion2,
    cancion3:this.bandaForm.value.cancion3
  }
  for(let bandaActual of this.bandasTotales){
    this.contador++;
    if(bandaActual.id==this.banda.id){
      this.posicion=this.contador  
    }
  }
  console.log(this.posicion);
  
  this.contador=0
  this.bandasTotales.splice((this.posicion-1),1,this.bandaEditada)
  console.log(this.bandasTotales);
  localStorage.setItem('bandas',JSON.stringify(this.bandasTotales))
  this.router.navigate([`bandas/${this.banda.id}`])
  
  }
  
  

}
