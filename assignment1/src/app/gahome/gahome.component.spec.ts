import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GAhomeComponent } from './gahome.component';

describe('GAhomeComponent', () => {
  let component: GAhomeComponent;
  let fixture: ComponentFixture<GAhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GAhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GAhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
