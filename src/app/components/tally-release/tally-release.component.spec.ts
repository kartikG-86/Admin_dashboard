import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyReleaseComponent } from './tally-release.component';

describe('TallyReleaseComponent', () => {
  let component: TallyReleaseComponent;
  let fixture: ComponentFixture<TallyReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyReleaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
