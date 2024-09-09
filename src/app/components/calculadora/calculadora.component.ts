import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  public expresion:string = "";

  public changeExpresion(str:string):any{
    this.expresion = this.expresion.concat(str);
  }
  public calc():any{
   //this.expresion = eval(this.expresion);
  }
  public reset():any{
    this.expresion = "";
  }
}
