import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ProductService } from './product.service';

import { ProductListComponent } from './notes-list/notes-list.component';
import { ProductDetailComponent } from './note-detail/note-detail.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
  ],
  providers: [ProductService],
})
export class NotesModule { }
