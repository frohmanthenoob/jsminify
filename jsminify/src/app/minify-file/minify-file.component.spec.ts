import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinifyFileComponent } from './minify-file.component';

describe('MinifyFileComponent', () => {
  let component: MinifyFileComponent;
  let fixture: ComponentFixture<MinifyFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinifyFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinifyFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
