import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { ModalController } from '@ionic/angular';

import Amplify, { API, graphqlOperation } from "aws-amplify";
import { APIService, ListPersonsQuery } from '../API.service';

import { PersonCreateModalComponent } from '../person-create-modal/person-create-modal.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  people: ListPersonsQuery;
  modal: any;

  constructor(public amplifyService: AmplifyService,
              public apiService: APIService,
              public modalController: ModalController) {

  }

  async createPerson() {
    this.modal = await this.modalController.create({
      component: PersonCreateModalComponent,
      //componentProps: props
    });
    return this.modal.present();
  }

  async ngOnInit() {
    this.people = await this.apiService.ListPersons();
    console.log('Loaded people', this.people);
  }
}
