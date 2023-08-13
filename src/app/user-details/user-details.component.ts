import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userId!: number;
  userData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      this.fetchUserData();
    });
  }

  fetchUserData(): void {
    const URL = `https://jsonplaceholder.typicode.com/users/${this.userId}`;

    axios
      .get(URL)
      .then((response: any) => {
        this.userData = response.data;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
