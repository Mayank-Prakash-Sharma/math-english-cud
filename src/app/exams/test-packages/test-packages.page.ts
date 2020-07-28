import { Component, OnInit } from '@angular/core';

//Import ActivatedRoute and inject into constructor (to allow us to subscribe to the dynamic id passed on by the previous page)
import { ActivatedRoute } from '@angular/router';

//Import and inject NavController
import { NavController } from '@ionic/angular';

// Import and inject Service having my packages and data model class
import { ExamsService } from '../exams.service';
import { Exams } from '../exams.model';

// Import and inject Service having my test packages and data model class
import { TestPackagesService } from './test-packages.service';
import { TestPackage } from './test-packages.model';

//Import Observable
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-packages',
  templateUrl: './test-packages.page.html',
  styleUrls: ['./test-packages.page.scss'],
})
export class TestPackagesPage implements OnInit {

   //For storing the data of the dynamic subject Id passed from the previous page
   loadedExam: Exams;
  
  //To store the Observable received from Firebase
  private testPackages: Observable<TestPackage[]>;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private testPackagesService: TestPackagesService, private examsService: ExamsService) { }

  ngOnInit() {

     //Using the dynamic attribute (examId) passed from the previous page and storing it in a local variable. Subscribe is always active and not only when page is visible (so we could also have written it outside ngOnInit) 
     this.route.paramMap.subscribe(paramMap => {
      //Adding an If check for scenarios where no dynamic attribute has been passed
      if (!paramMap.has('examId')) {
        this.navCtrl.navigateBack('/exams');
        return;
      }

    //If dynamic attribute has been passed, we will store it on our local variable, so that we can use it on our html template
    this.loadedExam = this.examsService.accessExamId(paramMap.get('examId'));

    //Setting the value of the loadedExam1 object in .service.ts file to be the same as loadedExam
    this.testPackagesService.loadedExam1 = this.loadedExam;  

    console.log(this.testPackagesService.loadedExam1);
    console.log(this.testPackagesService.loadedExam1.id);

    //Set the reference of the collection choosen by the user in the previous page
    this.testPackagesService.setPackages();


    //Store the observable received from Firebase Firestore in our local observable
    this.testPackages = this.testPackagesService.getPackages();

  });  

}

}
