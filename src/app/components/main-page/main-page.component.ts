import { Component, OnInit } from '@angular/core';
import { Banda, BandasService } from 'src/app/services/bandas.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  listaBandasStorage: Banda[];
  bandasMostradas: []

  constructor(private bandasService: BandasService) {
    this.listaBandasStorage=[];
    this.bandasMostradas=JSON.parse(localStorage.getItem('bandas'))
    
   }

  async ngOnInit() {
    try{
      console.log(this.bandasMostradas);
      
      if(this.bandasMostradas==null){
        console.log('hey');
        this.listaBandasStorage= await this.bandasService.getAll()
        localStorage.setItem('bandas',JSON.stringify(this.listaBandasStorage))
      }
     
      this.bandasMostradas=JSON.parse( localStorage.getItem('bandas'))
      console.log(this.bandasMostradas);
      
    }catch(error){
      console.log(error);
    }

  }
  
  

}
