import { Component, Input, OnInit } from '@angular/core';
import { FaceSnapsService } from '../service/face-snap.service';
import { FaceSnap } from '../model/face-snap.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  providers: [FaceSnapsService],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css',
})
export class FaceSnapComponent implements OnInit {
  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router
  ) {}

  @Input() facesnap!: FaceSnap;
  buttonText!: string;

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`);
  }
}
