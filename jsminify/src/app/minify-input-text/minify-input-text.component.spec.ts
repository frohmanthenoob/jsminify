import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinifyInputTextComponent } from './minify-input-text.component';

describe('MinifyInputTextComponent', () => {
  let component: MinifyInputTextComponent;
  let fixture: ComponentFixture<MinifyInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinifyInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinifyInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
