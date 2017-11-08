import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  questions: Object[];

  constructor() { 
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My name is David'
      },
      {
        text: 'What is your age?',
        answer: 'My age is 25'
      },
      {
        text: 'What is your favorite color?',
        answer: 'My favorite color is blue'
      },
    ]
  }

  ngOnInit() {
  }

}
