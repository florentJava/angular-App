import { Injectable } from '@angular/core';
import { FaceSnap } from '../model/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {

  constructor(private http: HttpClient) { }
  faceSnaps: FaceSnap[] = [];

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
    return this.getFaceSnapById(faceSnapId).pipe(
        map(faceSnap => ({
            ...faceSnap,
            snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
        })),
        switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
            `http://localhost:3000/facesnaps/${faceSnapId}`,
            updatedFaceSnap)
        )
    );
}


  getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
    return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
    return this.getAllFaceSnaps().pipe(
         map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
         map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
         map(previousFacesnap => ({
            ...formValue,
            snaps: 0,
            createdDate: new Date(),
            id: previousFacesnap.id + 1
        })),
        switchMap(newFacesnap => this.http.post<FaceSnap>(
            'http://localhost:3000/facesnaps',
            newFacesnap)
        )
    );
  }
}
