import { Injectable } from '@angular/core';

// Import the data model for loadedExam1 object. It will have the same value as loadedExam variable (which holds the dynamic exam id passed from the previous page) of the .ts file. I am going to use this loadedExam1 object in my fucntion ........ to display my exam specific test-packages. 
import { Exams } from '../exams.model';

//Import the essential modules to work with Firebase Firestore database
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

//Import the data model that defines the structure of our objects in Firestore Database
import { TestPackage } from './test-packages.model';

@Injectable({
  providedIn: 'root'
})
export class TestPackagesService {

  loadedExam1: Exams;

  private testPackageCollection:AngularFirestoreCollection<TestPackage>; //Will contain the reference to our Exam Collection
  private testPackages: Observable<TestPackage[]>;  //Will contain all the data of our Test Package documents within our Exam Collection

  constructor(private afs: AngularFirestore) { }

  //Set the values of the exam collection and the test packages within it based on what exam collection the user clicked in the previous page
  setPackages() {
    this.testPackageCollection = this.afs.collection<TestPackage>(this.loadedExam1.id);
    this.testPackages = this.testPackageCollection.snapshotChanges().pipe(
      map(tstPackages => {
        return tstPackages.map(tstPackage => {
          const data = tstPackage.payload.doc.data();  // Getting the data of each Test Package
          const id = tstPackage.payload.doc.id;  // Getting the id of each Test Package
          return { id, ...data };
        })
      })
    )
   }

   //To View the array of Test Package documents in the collection
   getPackages(): Observable<TestPackage[]> {
     return this.testPackages;
   }

  //To View the data in the Test Package document
  getPackage(id: string): Observable<TestPackage> {
    return this.testPackageCollection.doc<TestPackage>(id).valueChanges().pipe(
      take(1),
      map(tstPackage => {
        tstPackage.id = id;
        return tstPackage;
      })
    );
  }

}
