import { Component, OnInit } from '@angular/core';

// Import and inject Service having my packages and data model class
import { ExamsService } from './exams.service';
import { Exams } from './exams.model';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.page.html',
  styleUrls: ['./exams.page.scss'],
})
export class ExamsPage implements OnInit {
  loadedExams: Exams[];

  constructor(private examsService: ExamsService) { }

  ngOnInit() {
    this.loadedExams = this.examsService.exams; 
    console.log("ngoninit fired");
  }

}
