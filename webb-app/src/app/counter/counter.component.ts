import { Component } from '@angular/core';
import { concatMap, mergeMap, delay, exhaustMap,  switchMap, take } from 'rxjs/operators';


import 'zone.js';
import { Observable, filter, interval, map, tap , of } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe], 
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  numbers$!: Observable<Number>;



  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  ngOnInit() {

    this.numbers$ = interval(1000)

    interval(500).pipe(
      take(10),
      map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
      tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
      switchMap(color => this.getTrainObservable$(color)),
      tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    ).subscribe();
  }

  getTrainObservable$(color: 'rouge' | 'jaune') {
    const isRedTrain = color === 'rouge';
    isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
    const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
    console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
    return of({ color, trainIndex }).pipe(
      delay(isRedTrain ? 5000 : 6000)
    );
  }

  translateColor(color: 'rouge' | 'jaune') {
    
}
}