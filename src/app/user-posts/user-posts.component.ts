import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  userPosts: any[] = [];
  userId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      this.fetchUserPosts();
    });
  }

  fetchUserPosts(): void {
    const URL = `https://jsonplaceholder.typicode.com/posts?userId=${this.userId}`;
    axios
      .get(URL)
      .then((response: any) => {
        this.userPosts = response.data;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  getUserPostsByUserId(userId: number) {
    return this.userPosts.filter((post: any) => post.userId === userId);
  }
}
