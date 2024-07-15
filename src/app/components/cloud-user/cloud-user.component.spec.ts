import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudUserComponent } from './cloud-user.component';

describe('CloudUserComponent', () => {
  let component: CloudUserComponent;
  let fixture: ComponentFixture<CloudUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
