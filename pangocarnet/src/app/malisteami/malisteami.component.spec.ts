import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalisteamiComponent } from './malisteami.component';

describe('MalisteamiComponent', () => {
  let component: MalisteamiComponent;
  let fixture: ComponentFixture<MalisteamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalisteamiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MalisteamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
