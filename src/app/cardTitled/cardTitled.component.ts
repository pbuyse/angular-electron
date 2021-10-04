import { Component, Input, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-cardT',
  templateUrl: './cardTitled.component.html',
  styleUrls: ['./cardTitled.component.scss']
})
export class CardTComponent implements OnInit {

  @Input() name: string;
  @Input() description: string;

  @Output() linkEvent =  new EventEmitter<string>();
  @Input() allLinks: string[];
  @Input() allNames: string[];

  @Input() setLink: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.name = "";
    this.description = "";
    this.allLinks = [];
    this.allNames = [];
    this.setLink = "";
   }

  ngOnInit(): void {
  }

  sendLink(index: number) {
    this.linkEvent.emit(this.allLinks[index])
  }

  goToUrl(link: string | undefined) {
    window.open(
      link,
      '_blank'
    );
  }

}
