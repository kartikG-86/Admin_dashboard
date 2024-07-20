import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyReleaseModalComponent } from './tally-release-modal.component';

describe('TallyReleaseModalComponent', () => {
  let component: TallyReleaseModalComponent;
  let fixture: ComponentFixture<TallyReleaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyReleaseModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyReleaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
