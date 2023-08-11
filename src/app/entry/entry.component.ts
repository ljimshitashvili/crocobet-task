import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent {
  responseData: any;
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const URL = 'https://jsonplaceholder.typicode.com/users';

    axios
      .get(URL)
      .then((response) => {
        this.responseData = response.data;
        console.log('API Response:', this.responseData);
      })
      .catch((error) => {
        console.log('API ERROR:', error);
      });
  }
}
