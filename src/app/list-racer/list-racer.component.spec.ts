import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRacerComponent } from './list-racer.component';

describe('ListRacerComponent', () => {
  let component: ListRacerComponent;
  let fixture: ComponentFixture<ListRacerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRacerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
