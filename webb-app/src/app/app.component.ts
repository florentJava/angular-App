import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Observable, interval } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { HeaderComponent  } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe , RouterOutlet , HeaderComponent , LandingPageComponent], 
  templateUrl:'app.component.html',
})
export class AppComponent {
  title = 'counter';

  numbers$!: Observable<number>;

  ngOnInit(): void {
    this.numbers$ = interval(1000);
  }
}
