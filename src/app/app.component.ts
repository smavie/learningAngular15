import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
 
  title = 'learningAngular15';

  ngOnDestroy(): void {
    console.log('In destroy');
  }
}
