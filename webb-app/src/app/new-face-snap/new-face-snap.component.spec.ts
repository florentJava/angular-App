import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFaceSnapComponent } from './new-face-snap.component';

describe('NewFaceSnapComponent', () => {
  let component: NewFaceSnapComponent;
  let fixture: ComponentFixture<NewFaceSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFaceSnapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewFaceSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
