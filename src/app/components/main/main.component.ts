import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  count: number = 5;

  onDelete() {
    console.log('OnDeleteWasCalled')
    alert('OnDeleteWasCalled')
  }

}
