import { Component, OnInit } from '@angular/core';
import { CreatePersonInput } from '../API.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-person-create-modal',
  templateUrl: './person-create-modal.component.html',
  styleUrls: ['./person-create-modal.component.scss']
})
export class PersonCreateModalComponent implements OnInit {
  person: CreatePersonInput = {
    name: ''
  };

  constructor(private modalController: ModalController) {
  }

  save() {
    this.modalController.dismiss({
      person: {
        name: this.person.name,
        email: this.person.email,
        jobTitle: this.person.jobTitle
      }
    });
  }

  cancel() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
