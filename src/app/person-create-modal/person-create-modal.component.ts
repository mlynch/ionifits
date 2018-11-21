import { Component, OnInit } from '@angular/core';
import { CreatePersonInput } from '../API.service';
@Component({
  selector: 'app-person-create-modal',
  templateUrl: './person-create-modal.component.html',
  styleUrls: ['./person-create-modal.component.scss']
})
export class PersonCreateModalComponent implements OnInit {
  person: CreatePersonInput = {
    name: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
