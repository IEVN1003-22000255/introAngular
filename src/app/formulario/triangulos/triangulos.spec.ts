import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Triangulos } from './triangulos';

describe('Triangulos', () => {
  let component: Triangulos;
  let fixture: ComponentFixture<Triangulos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Triangulos],
    }).compileComponents();

    fixture = TestBed.createComponent(Triangulos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
