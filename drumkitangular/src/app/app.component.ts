import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'drumkitangular';
  // s1 = this.numberOfDrumButtons;
  numberOfDrumButtons = document.querySelectorAll('.drum').length;

  constructor() {
    for (let i = 0; i < this.numberOfDrumButtons; i++) {
      document.querySelectorAll('.drum')[i].addEventListener('click', () => {
        let buttonInnerHTML = document.querySelectorAll('.drum')[i].innerHTML;

        this.makeSound(buttonInnerHTML);

        this.buttonAnimation(buttonInnerHTML);
      });
    }
    document.addEventListener('keypress', (event) => {
      this.makeSound(event.key);

      this.buttonAnimation(event.key);
    });
  }

  ngOnInit() {}

  public makeSound(key: string) {
    switch (key) {
      case 'w':
        var tom1 = new Audio('/assets/sounds/tom-1.mp3');
        tom1.play();
        break;

      case 'a':
        var tom2 = new Audio('/assets/sounds/tom-2.mp3');
        tom2.play();
        break;

      case 's':
        var tom3 = new Audio('/assets/sounds/tom-3.mp3');
        tom3.play();
        break;

      case 'd':
        var tom4 = new Audio('/assets/sounds/tom-4.mp3');
        tom4.play();
        break;

      case 'j':
        var snare = new Audio('/assets/sounds/snare.mp3');
        snare.play();
        break;

      case 'k':
        var crash = new Audio('/assets/sounds/crash.mp3');
        crash.play();
        break;

      case 'l':
        var kick = new Audio('/assets/sounds/kick-bass.mp3');
        kick.play();
        break;

      default:
        console.log(key);
    }
  }

  public buttonAnimation(currentKey: string) {
    let activeButton = document.querySelector('.' + currentKey);

    activeButton?.classList.add('pressed');

    setTimeout(function () {
      activeButton?.classList.remove('pressed');
    }, 100);
  }
}
