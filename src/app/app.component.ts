import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show:boolean = true;
  animales: Array<any> =[
  	{tipo:"Perro",nombre:"Alejo",edad:22},
  	{tipo:"Gato",nombre:"mount",edad:20},
  	{tipo:"Pato",nombre:"Fun",edad:18},
  ]
}
