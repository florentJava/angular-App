import { Component, OnInit } from '@angular/core';
import { FaceSnapsService } from '../service/face-snap.service';
import { FaceSnap } from '../model/face-snap.model';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-face-snap-list',
    standalone: true,
    templateUrl: './face-snap-list.component.html',
    styleUrl: './face-snap-list.component.css',
    imports: [CommonModule,FaceSnapComponent,HttpClientModule],
    providers:[FaceSnapsService]
})
export class FaceSnapListComponent  implements OnInit {

  constructor(private faceSnapsService: FaceSnapsService) { }

  faceSnaps!: FaceSnap[];

  faceSnaps$!: Observable<FaceSnap[]>;

  ngOnInit() {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }
}