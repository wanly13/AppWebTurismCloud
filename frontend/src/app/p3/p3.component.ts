import { ActivatedRoute, Router } from '@angular/router';
import { P2Service } from '../_services/p2.service';
import { Component, OnInit } from '@angular/core';
import { ComentariosService } from '../_services/comentarios.service';

@Component({
  selector: 'app-p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.scss']
})
export class P3Component implements OnInit {

  place: any;
  comments: any [] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private p2Service: P2Service,
    private commentsService: ComentariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      data => {
        const id = data.get('id');
        console.log(id);

        this.commentsService.getCommentsByPlaceID(id).subscribe(
          response => {
            console.log(response);
            this.comments = response
          },
          error => {
            console.error(error);
          }
        )

        this.p2Service.getPlaceById(id).subscribe(
          response => {
            console.log(response);
            this.place = response
          },
          error => {
            console.error(error);
          }
        )
      }
    );
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

}
