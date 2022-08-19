import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  data: any;  
  people: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadPeople(1); this.loadPeople(2);
  }

  loadPeople(page:number){
      this.http.get('https://swapi.dev/api/people/?pages=${pages}')
      .subscribe((res: any) => {
        this.data = res;
        this.people = res.results;
      });
  }

}
