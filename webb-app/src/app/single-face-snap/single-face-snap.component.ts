import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../model/face-snap.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { FaceSnapsService } from '../service/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  providers: [FaceSnapsService],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.css',
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buttonText = 'Oh Snap!';

    const snapId = +this.route.snapshot.params['id'];

    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(snapId);
  }

  onSnap(faceSnapId: number) {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapsService
        .snapFaceSnapById(faceSnapId, 'snap')
        .pipe(tap(() => (this.buttonText = 'Oops, unSnap!')));
    } else {
      this.faceSnap$ = this.faceSnapsService
        .snapFaceSnapById(faceSnapId, 'unsnap')
        .pipe(tap(() => (this.buttonText = 'Oh Snap!')));
    }
  }
}
