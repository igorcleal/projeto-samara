import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPortfolioComponent } from './cadastro-portfolio.component';

describe('CadastroPortfolioComponent', () => {
  let component: CadastroPortfolioComponent;
  let fixture: ComponentFixture<CadastroPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
