import { Component, OnInit } from '@angular/core';
import { User } from 'src/domain/User';
import { ApiService } from '../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.apiService.getAllUsers().subscribe(
      (users: User[]) => this.users = users,
      error => console.error('Error fetching users:', error)
    );
  }

  navigateToUserProfile(userId: number): void {
    this.router.navigate(['/users', userId]);
  }

}
