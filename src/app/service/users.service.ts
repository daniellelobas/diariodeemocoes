import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
    $key: string;
    name: string;
    email: string
    mobile: number;
  constructor(private db: AngularFireDatabase) { }
  // createUser(id: string, name: string) {
  //   return this.db.object('/users/' + id).set({ id, name })
  // }
  // getUsers() {
  //   return this.db.list('/users')
  // }
}
