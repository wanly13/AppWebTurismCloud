import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TriviaService } from '../_services/trivia.service';

@Component({
  selector: 'app-p3-l2',
  templateUrl: './p3-l2.component.html',
  styleUrls: ['./p3-l2.component.scss']
})
export class P3L2Component implements OnInit {

  preguntas: any [] = []
  
  constructor(
    private triviaService: TriviaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      data => {
        const trivia_id = data.get('id');
        console.log(trivia_id);

        this.triviaService.getQuestionsByTriviaID(trivia_id).subscribe(
          response => {
            console.log(response);
            this.preguntas = response;
          },
          error => {
            console.error(error);
          }
        )
      }
    );
  }

}
