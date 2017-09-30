import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { EntryService } from '../../services/entry.service'

import { Entry } from '../../models/entry'

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  // @Output() onNewFood = new EventEmitter<Object>();
  constructor(private entries: EntryService) { }

  newEntry: Entry = {
    title: '',
    content: '',
    date: new Date()
  };

  handleSubmitClick(title: string, content: string){
    console.log(title, content)
    // this.onNewFood.emit(this.newEntry);
    this.entries.postEntry(title, content)
  }


  ngOnInit() {
  }

}
