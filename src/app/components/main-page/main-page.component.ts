import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Banda, BandasService } from 'src/app/services/bandas.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  filtrarBandas:FormGroup;
  listaBandasStorage: Banda[];
  bandasMostradas: any
  bandasFiltradas:[]

  constructor(private bandasService: BandasService) {
    this.filtrarBandas= new FormGroup({
      filtro: new FormControl('')
    })
    this.listaBandasStorage=[];
    this.bandasMostradas=JSON.parse(localStorage.getItem('bandas'))
    
   }

  async ngOnInit() {
    try{
     
      
      if(this.bandasMostradas==null){
    
        this.listaBandasStorage= await this.bandasService.getAll()
        localStorage.setItem('bandas',JSON.stringify(this.listaBandasStorage))
      }
     
      this.bandasMostradas=JSON.parse( localStorage.getItem('bandas'))
     
     this.bandasFiltradas= this.bandasMostradas.filter( el=>{
      return el.nombre.includes(this.filtrarBandas.value.filtro)
    
    })
      
      
    }catch(error){
      console.log(error);
    }


   
  }
  
  onChange(){
    this.bandasFiltradas= this.bandasMostradas.filter( el=>{
      return el.nombre.includes(this.filtrarBandas.value.filtro.toLowerCase()) 
    })
   
    
  }

}
