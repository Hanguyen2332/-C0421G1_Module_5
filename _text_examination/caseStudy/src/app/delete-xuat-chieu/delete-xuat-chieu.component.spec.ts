import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteXuatChieuComponent } from './delete-xuat-chieu.component';

describe('DeleteXuatChieuComponent', () => {
  let component: DeleteXuatChieuComponent;
  let fixture: ComponentFixture<DeleteXuatChieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteXuatChieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteXuatChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
