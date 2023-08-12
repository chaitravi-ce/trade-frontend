import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { Trade } from 'src/domain/Trade';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

  trades: Trade[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadTrades();
  }

  loadTrades(): void {
    this.apiService.getTrades().subscribe({
      next: (trades: Trade[]) => {
        this.trades = trades,
        console.log(this.trades)
      },
      error: (error: string) => console.error('Error occurred ' + error),
    });
  }

}
