import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

import Amplify, { API, graphqlOperation } from "aws-amplify";
import { APIService, ListPersonsQuery } from '../API.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  people: ListPersonsQuery;

  constructor(public amplifyService: AmplifyService, public apiService: APIService) {

  }


  async ngOnInit() {
    this.people = await this.apiService.ListPersons();
    console.log('Loaded people', this.people);
  }
}
