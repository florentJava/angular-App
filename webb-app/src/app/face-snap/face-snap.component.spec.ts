import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapComponent } from './face-snap.component';

describe('FaceSnapComponent', () => {
  let component: FaceSnapComponent;
  let fixture: ComponentFixture<FaceSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceSnapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaceSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
