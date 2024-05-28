import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFaceSnapComponent } from './single-face-snap.component';

describe('SingleFaceSnapComponent', () => {
  let component: SingleFaceSnapComponent;
  let fixture: ComponentFixture<SingleFaceSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleFaceSnapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleFaceSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
