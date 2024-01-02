import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsersService } from '../service/users.service';
import { FormusersComponent } from '../service/formusers/formusers.component';

import { 
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject } from '@angular/fire/compat/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  UsuariosRef: AngularFireList<any>;
  UsuarioRef: AngularFireObject<any>;
  public actionSheetButtons = [
    {
      text: 'Historico',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        console.log('Delete clicked');
      }
    },
    {
      text: 'Calendario',
      icon: 'calendar-number-sharp',
      handler: () => {
        console.log('Share clicked');
      }
    },
    {
      text: 'SOS',
      icon: 'medkit-sharp',
      handler: () => {
        console.log('Play clicked');
      }
    },
    {
      text: 'Emocao',
      icon: 'heart',
      handler: () => {
        console.log('Favorite clicked');
      }
    },
    {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }
  ];
 
  usersForm: FormGroup;
  $key: string;
  name: string;
  email: string;
  mobile: number;
  users: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.getUsers();
  }

  // Create
  // createUser(user: any) {
  //   this.db.list('users').push(user);
  // }
    create(){
      this.db.list('users').push({name: this.name, email: this.email})
      .then(() => {
        window.alert('User created successfully!');
      })
      .catch(error => {
        console.error('Error: ', error);
      })
    }
    createDaily(key: string, daily: string, date: string){
      this.db.list('users').update(key, { daily: daily, date: date })
    }
  // Read
  // getUsers(key: string) {
  //   return this.users.find(user => user.$key === key);
  // }
    getUsers(){
      this.users = this.db.list('users').valueChanges();
    }

  // Update
  updateUser(key: string, name: string, email: string) {
    this.db.list('users').update(key, { name: name, email: email })
  }

  // Delete
  // deleteUser(key: string) {
  //   const index = this.users.findIndex(user => user.$key === key);
  //   if (index !== -1) {
  //     this.users.splice(index, 1);
  //   }
  // }
}
