import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
 
 
  getPassword(){
    return this.password;
  }

  generatePassword(): string{
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyxz';
    const symbols = '!"§$%&/()=?´@*#';

    let validChars = '';

    if(this.includeNumbers){
      validChars += numbers;
    }

    if(this.includeLetters){
      validChars += letters;
    }

    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';

    for(let i= 0; i<this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    return generatedPassword;
  }

  onChangeLength(value: string){
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
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
    this.password = this.generatePassword();
  }
}
