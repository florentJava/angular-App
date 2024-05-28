import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapListComponent } from './face-snap-list.component';

describe('FaceSnapListComponent', () => {
  let component: FaceSnapListComponent;
  let fixture: ComponentFixture<FaceSnapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceSnapListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaceSnapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
