import { Component } from '@angular/core'; @Component({
    selector:"Exercicio-Angular",
    templateUrl:'./exercicio.component.html',
    styleUrls:['./exercicio.component.css']
})



export class ExercicioComponent { 
    nome:string;

    alterarNome(event): void{
        console.log(event.target.value);
        this.nome=event.target.value;
      }

    adicionar(nome):void{
        console.log(nome);
        this.nome =nome;
        
    }
}