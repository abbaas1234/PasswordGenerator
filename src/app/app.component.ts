import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PasswordGenerator';
  test: number = 12345;

  password: string = '';
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  length: number = 0;

  onButtonClick() {
    // console.log('Button Clicked !');
    //alert('clicked !')

    const numbers = '0123456789'
    const letters = 'abcdefghigklmnopqrstuvwxyz'
    const symbols = '!@#$%&*'
    let validChars = ''

    if (this.includeLetters) {
      validChars += letters
      validChars += letters.toUpperCase()
    }

    if (this.includeNumbers) {
      validChars += numbers
    }

    if (this.includeSymbols) {
      validChars += symbols
    }

    let generatedPassword = ''

    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }

    this.password = generatedPassword;
  }


  onChangeLetter() {
    this.includeLetters = !this.includeLetters
  }

  onChangeNumber() {
    this.includeNumbers = !this.includeNumbers
  }

  onChangeSymbol() {
    this.includeSymbols = !this.includeSymbols
  }

  onCahngeLength(value: string) {
    this.length = 0
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue
    }
  }

  isNaNLength(): boolean {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }

}
