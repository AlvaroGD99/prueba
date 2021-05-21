import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-banda',
  templateUrl: './nueva-banda.component.html',
  styleUrls: ['./nueva-banda.component.css']
})
export class NuevaBandaComponent implements OnInit {
  bandaForm: FormGroup;
  bandasTotales:{}[]=[]
 
  bandaAñadida:{}
  ultimaBanda:Object
  constructor(private router:Router) { 
    this.bandaAñadida={}
   
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
    console.log(this.bandasTotales);
    this.ultimaBanda=this.bandasTotales[this.bandasTotales.length-1];
    
  }

  nuevaBanda(){
   
  this.bandaAñadida= {
  id: this.ultimaBanda['id'] +1,
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
this.bandasTotales.push(this.bandaAñadida)
localStorage.setItem('bandas',JSON.stringify(this.bandasTotales))
this.router.navigate([''])
}
}
