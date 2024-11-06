import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgloopComponent } from './ngloop.component';

describe('NgloopComponent', () => {
  let component: NgloopComponent;
  let fixture: ComponentFixture<NgloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgloopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
