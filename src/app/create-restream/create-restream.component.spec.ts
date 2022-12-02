import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRestreamComponent } from './create-restream.component';

describe('CreateRestreamComponent', () => {
  let component: CreateRestreamComponent;
  let fixture: ComponentFixture<CreateRestreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRestreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRestreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
