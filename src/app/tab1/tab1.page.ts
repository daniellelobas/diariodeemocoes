import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SignUpFormComponent } from '../service/sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  router: any;

  constructor(private afAuth: AngularFireAuth) {}
  login(email:string, password:string){
    this.afAuth.signInWithEmailAndPassword(email, password).then((user)=>{
      window.alert('User logged in successfully!');
      this.router.navigateByUrl('/tabs/tab2');
    }).catch((error)=>{
      window.alert('User dont find!');
    })
  }
  register(email:string, password:string){
    this.afAuth.createUserWithEmailAndPassword(email, password).then((user)=>{
      window.alert('User registered successfully!');
    }).catch((error)=>{
      console.log('Error: ', error);
    })
  }
  async presentSignUpForm() {
    // logic to present the sign-up form as a modal
  }
}
