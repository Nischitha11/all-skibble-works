import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planetperson',
  templateUrl: './planetperson.component.html',
  styleUrls: ['./planetperson.component.css']
})
export class PlanetpersonComponent implements OnInit {
  @Input() planetpersonInfo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
