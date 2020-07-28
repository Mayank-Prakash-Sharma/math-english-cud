import { Component, OnInit } from '@angular/core';

//Import ActivatedRoute and inject into constructor (to allow us to subscribe to the dynamic id passed on by the previous page)
import { ActivatedRoute } from '@angular/router';

//Import and inject NavController
import { NavController } from '@ionic/angular';

//Import Observable
import { Observable } from 'rxjs';

//Import the data model that defines the structure of our objects in Firestore Database
import { TestService } from './test.service';
import { Section } from './test.model';

import { TestsService } from '../tests.service';
import { Test } from '../tests.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  //For storing the data of the dynamic subject Id passed from the previous page
  loadedTest: string;
  
  //To store the Observable received from Firebase
  private sections: Observable<Section[]>;
  private section: Test;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private testsService: TestsService, private testService: TestService) { }

  ngOnInit() {
    //If dynamic attribute has been passed, we will store it on our local variable, so that we can use it on our html template
    this.loadedTest = this.route.snapshot.paramMap.get('testId');

    //Setting the value of the loadedTest1 in .service.ts file to be the same as loadedTest
    this.testService.loadedTest1 = this.loadedTest; 
    
    //Set the reference of the collection choosen by the user in the previous page
    this.testService.setSections();
    
    //Store the observable received from Firebase Firestore in our local observable
    this.sections = this.testService.getSections();

    if (this.loadedTest) {
      this.testsService.getTest(this.loadedTest).subscribe(section => {
      this.section = section; 
      });
    }
    console.log("abrakadabra");
    console.log(this.testService.loadedTest1);
  }

}
