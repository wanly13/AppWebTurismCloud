import { Component, OnInit } from '@angular/core';
import { ComentariosService } from '../_services/comentarios.service';

@Component({
  selector: 'app-comments-table',
  templateUrl: './comments-table.component.html',
  styleUrls: ['./comments-table.component.scss']
})
export class CommentsTableComponent implements OnInit {

  constructor(
    private ComentariosService:ComentariosService
  ) {}

  ngOnInit(): void {

  }

}
