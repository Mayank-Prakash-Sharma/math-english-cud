import { Injectable } from '@angular/core';

// Import the data model for loadedPackage1 object. It will have the same value as loadedPackage variable (which holds the dynamic package id passed from the previous page) of the .ts file. I am going to use this loadedPackage1 object in my fucntion ........ to display my package specific tests. 
import { TestPackagesService } from '../test-packages.service';
import { TestPackage } from '../test-packages.model';

//Import the essential modules to work with Firebase Firestore database
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

//Import the data model that defines the structure of our objects in Firestore Database
import { Test } from './tests.model';

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  //For storing the data of the dynamic package Id passed from the previous page. I am basically doing this in .ts file. There i will just set the value of this variable. 
  loadedPackageId1: string;

  private testCollection:AngularFirestoreCollection<Test>; //Will contain the reference to our Tests Collection
  private tests: Observable<Test[]>;  //Will contain all the data of our Test documents within our Tests Collection

  constructor(private afs: AngularFirestore, private testPackagesService: TestPackagesService) { }

  //Set the values of the test collection and the tests within it based on what test collection the user clicked in the previous page
  setTests() {
    // this.testCollection = this.afs.collection<TestPackage>(this.loadedExam2).doc(this.loadedPackageId1).collection<Test>('Tests');
    console.log('oookkdddhnmd');
    console.log(this.testPackagesService.loadedExam1.id);
    // console.log(this.loadedExam2);
    // this.testCollection = this.afs.collection<TestPackage>('Demo Exam').doc(this.loadedPackageId1).collection<Test>('Tests');
    
    this.testCollection = this.afs.collection<TestPackage>(this.testPackagesService.loadedExam1.id).doc(this.loadedPackageId1).collection<Test>('Tests');
    this.tests = this.testCollection.snapshotChanges().pipe(
      map(tsts => {
        return tsts.map(tst => {
          const data = tst.payload.doc.data();  // Getting the data of each Test Package
          const id = tst.payload.doc.id;  // Getting the id of each Test Package
          return { id, ...data };
        })
      })
    )
   }

   //To View the array of Test documents in the collection
   getTests(): Observable<Test[]> {
    return this.tests;
  }

 //To View the data in the Test Package document
 getTest(id: string): Observable<Test> {
   return this.testCollection.doc<Test>(id).valueChanges().pipe(
     take(1),
     map(tst => {
       tst.id = id;
       return tst;
     })
   );
 }

}
