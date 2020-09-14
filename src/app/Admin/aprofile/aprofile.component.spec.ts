import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AProfileComponent } from './aprofile.component';

describe('AProfileComponent', () => {
  let component: AProfileComponent;
  let fixture: ComponentFixture<AProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
