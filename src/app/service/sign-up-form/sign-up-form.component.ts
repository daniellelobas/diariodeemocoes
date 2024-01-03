import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent  implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}
  async presentSignUpForm() {
    const modal = await this.modalController.create({
      component: SignUpFormComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
