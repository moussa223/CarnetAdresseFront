import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolemodiferComponent } from './rolemodifer.component';

describe('RolemodiferComponent', () => {
  let component: RolemodiferComponent;
  let fixture: ComponentFixture<RolemodiferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolemodiferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolemodiferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
