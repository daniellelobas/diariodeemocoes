import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { 
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject } from '@angular/fire/compat/database';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  titulo: string;
  descricao: string;
  dailys: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.getDailys();
  }
  getDailys(){
    this.dailys = this.db.list('dailys').valueChanges();
  }
  createdl(){
    this.db.list('dailys').push({titulo: this.titulo, descricao: this.descricao})
    .then(() => {
      window.alert('Daily created successfully!');
    })
  }
}

