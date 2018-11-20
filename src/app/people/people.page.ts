import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

import Amplify, { API, graphqlOperation } from "aws-amplify";

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  people: any[];

  constructor(public amplifyService: AmplifyService) {

  }


  async ngOnInit() {

  }
}
