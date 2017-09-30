import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EntryService } from '../../services/entry.service'

import { Entry } from '../../models/entry'

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  entry: Entry;
  entryId: string;

  constructor(private entries: EntryService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.entryId = params['id']);
    this.getEntry();
  }

  getEntry() {
    this.entries.getEntry(this.entryId)
      .subscribe((entries) => this.entry = entries);
  }
}
