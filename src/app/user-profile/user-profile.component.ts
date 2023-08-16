import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/domain/User';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user!: User;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const userIdString = this.route.snapshot.paramMap.get('id');
    if (userIdString !== null) {
      const userId = +userIdString; // Convert to number using +
      if (!isNaN(userId)) {
        this.apiService.getUserById(userId).subscribe((user) => {
          this.user = user;
        });
      } else {
        console.log('Invalid userId');
      }
    } else {
      console.log('userId is null');
    }
  }

}
