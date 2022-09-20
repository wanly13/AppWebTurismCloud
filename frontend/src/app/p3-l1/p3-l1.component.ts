import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TriviaService } from '../_services/trivia.service';

@Component({
  selector: 'app-p3-l1',
  templateUrl: './p3-l1.component.html',
  styleUrls: ['./p3-l1.component.scss']
})
export class P3L1Component implements OnInit {

  trivias: any [] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private triviaService: TriviaService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      data => {
        const place_id = data.get('id');
        console.log(place_id);

        this.triviaService.getTriviaByPlaceID(place_id).subscribe(
          response => {
            console.log(response);
            this.trivias = response;
          },
          error => {
            console.error(error);
          }
        )
      }
    );
  }

}
