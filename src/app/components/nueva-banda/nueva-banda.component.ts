import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-banda',
  templateUrl: './nueva-banda.component.html',
  styleUrls: ['./nueva-banda.component.css']
})
export class NuevaBandaComponent implements OnInit {
  bandaForm: FormGroup;
  bandasTotales:{}[]=[]
  xd:[]
  bandaAñadida:{}
  ultimaBanda:Object
  constructor(private router:Router) { 
    this.bandaAñadida={}
   
    this.bandasTotales=JSON.parse(localStorage.getItem('bandas'))
    this.bandaForm= new FormGroup({
      nombre: new FormControl(''),
      pais: new FormControl(''),
      integrantes: new FormControl(''),
      discoMasVendido: new FormControl(''),
      fechaCreacion: new FormControl(''),
      activos: new FormControl(''),
      imagen: new FormControl(''),
      informacion: new FormControl(''),    
  })
  }

  ngOnInit(): void {
    console.log(this.bandasTotales);
    this.ultimaBanda=this.bandasTotales[this.bandasTotales.length-1];
    
  }

  nuevaBanda(){
   
  this.bandaAñadida= {
  id: this.ultimaBanda['id'] +1,
  nombre: this.bandaForm.value.nombre,
  fechaCreacion: this.bandaForm.value.fechaCreacion,
  imagen: this.bandaForm.value.imagen,
  pais: this.bandaForm.value.pais,
  informacion:this.bandaForm.value.informacion,
  integrantes:this.bandaForm.value.integrantes,
  activos:this.bandaForm.value.activos,
  discoMasVendido:this.bandaForm.value.discoMasVendido
}
this.bandasTotales.push(this.bandaAñadida)
localStorage.setItem('bandas',JSON.stringify(this.bandasTotales))
this.router.navigate([''])
}
}
