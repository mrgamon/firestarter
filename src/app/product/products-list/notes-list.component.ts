import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

import { Product } from '../product-model';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'product-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class NotesListComponent implements OnInit {

  notes: Observable<Note[]>;
  content: string;

  constructor(private noteService: ) { }

  ngOnInit() {
    // this.notes = this.noteService.getData()
    this.notes = this.noteService.getSnapshot();
  }  

  createNote() {
    this.noteService.create(this.content);
    this.content = '';
  }

}
