import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
 
 
  getPassword(){
    return this.password;
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    console.log(` 
    include letters: ${this.includeLetters}
    include numbers: ${this.includeNumbers}
    include symbols: ${this.includeSymbols}
    `);
    this.password = 'MY PASSWORD !!!!';
  }
}
