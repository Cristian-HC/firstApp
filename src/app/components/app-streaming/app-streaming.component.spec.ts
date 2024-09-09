import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStreamingComponent } from './app-streaming.component';

describe('AppStreamingComponent', () => {
  let component: AppStreamingComponent;
  let fixture: ComponentFixture<AppStreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppStreamingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
