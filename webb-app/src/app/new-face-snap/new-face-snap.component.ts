import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FaceSnap } from '../model/face-snap.model';
import { Observable, map, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FaceSnapsService } from '../service/face-snap.service';
import { Router } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  providers:[FaceSnapsService],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.css',
})
export class NewFaceSnapComponent {
  snapForm!: FormGroup;
  urlRegex!: RegExp;
  faceSnapPreview$!: Observable<FaceSnap>;

  constructor(private formBuilder: FormBuilder,  
    private faceSnapsService: FaceSnapsService,
    private router: Router) {}


  ngOnInit(): void {
    this.urlRegex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group(
      {
        title: [null, [Validators.required]],
        description: [null, [Validators.required]],
        imageUrl: [
          null,
          [Validators.required, Validators.pattern(this.urlRegex)],
        ],
        location: [null],
      },
      {
        updateOn: 'blur',
      }
    );

    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(
        (formValues) =>
          ({
            ...formValues,
            createdDate: new Date(),
            snaps: 0,
            id: 0,
          } as FaceSnap)
      )
    );
  }

  onSubmitForm() {
    this.faceSnapsService.addFaceSnap(this.snapForm.value).pipe(
        tap(() => this.router.navigateByUrl('/facesnaps'))
    ).subscribe();
}
}
