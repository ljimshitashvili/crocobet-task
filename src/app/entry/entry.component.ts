import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {
  responseData: any;
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const URL = 'https://jsonplaceholder.typicode.com/users';
    console.log(this.responseData);

    console.log(this.responseData);

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

  constructor(private router: Router) {}

  navigateToUserDetails(userId: number): void {
    this.router.navigate(['/user', userId]);
  }
}
