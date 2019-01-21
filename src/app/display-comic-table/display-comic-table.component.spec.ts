import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComicTableComponent } from './display-comic-table.component';

describe('DisplayComicTableComponent', () => {
  let component: DisplayComicTableComponent;
  let fixture: ComponentFixture<DisplayComicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayComicTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
