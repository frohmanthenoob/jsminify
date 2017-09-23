import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinifyDownloadedComponent } from './minify-downloaded.component';

describe('MinifyDownloadedComponent', () => {
  let component: MinifyDownloadedComponent;
  let fixture: ComponentFixture<MinifyDownloadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinifyDownloadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinifyDownloadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
