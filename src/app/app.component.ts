import { Component } from '@angular/core';

@Component({
  // selector sarebbe il tag html a cui fa riferimento (auto with cli)
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // variabili per fare string interpolation nel template
  title = 'Plapp';
  vad:string = 'ddkdk'


  constructor(){
    console.log("ciaoooo");
    this.changeTitleName('newN');
  }


  changeTitleName(newName:string):void{
    this.title = newName;
  }
}
