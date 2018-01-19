import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Product } from './products-model';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

interface NewProduct {
  content: string;
  hearts: 0;
  time: number;
}

@Injectable()
export class ProductService {

  notesCollection: AngularFirestoreCollection<Product>;
  noteDocument:   AngularFirestoreDocument<Node>;

  constructor(private afs: AngularFirestore) {
    this.notesCollection = this.afs.collection('notes', (ref) => ref.orderBy('time', 'desc').limit(5));
  }

  getData(): Observable<Product[]> {
    return this.notesCollection.valueChanges();
  }

  getSnapshot(): Observable<Product[]> {
    // ['added', 'modified', 'removed']
    return this.notesCollection.snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.doc.data() as Product;
        return { id: a.payload.doc.id, content: data.content, hearts: data.hearts, time: data.time };
      });
    });
  }

  getNote(id: string) {
    return this.afs.doc<Product>(`notes/${id}`);
  }

  create(content: string) {
    const note = {
      content,
      hearts: 0,
      time: new Date().getTime(),
    };
    return this.notesCollection.add(note);
  }

  updateNote(id: string, data: Partial<Product>) {
    return this.getNote(id).update(data);
  }

  deleteNote(id: string) {
    return this.getNote(id).delete();
  }
}
