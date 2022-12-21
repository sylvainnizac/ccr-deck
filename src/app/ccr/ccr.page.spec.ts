import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CcrPage } from './ccr.page';

describe('CcrPage', () => {
  let component: CcrPage;
  let fixture: ComponentFixture<CcrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CcrPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CcrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
