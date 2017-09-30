import { Component, OnInit } from '@angular/core';

import { EntryService } from '../../services/entry.service'

import { Entry } from '../../models/entry'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  constructor(private entries: EntryService) { }

  entryList: Entry[]

  ngOnInit() {
    this.getEntries()
  }

  getEntries() {
    this.entries.getEntries()
      .subscribe((entries) => this.entryList = entries);
  }

}
