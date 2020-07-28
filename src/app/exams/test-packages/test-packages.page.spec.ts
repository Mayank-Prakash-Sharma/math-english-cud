import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestPackagesPage } from './test-packages.page';

describe('TestPackagesPage', () => {
  let component: TestPackagesPage;
  let fixture: ComponentFixture<TestPackagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPackagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestPackagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
