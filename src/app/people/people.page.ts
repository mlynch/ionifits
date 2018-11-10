import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  constructor(public amplifyService: AmplifyService) {
   const storage = amplifyService.storage();
   console.log('Got storage service', storage);
  }

  ngOnInit() {
  }

}
