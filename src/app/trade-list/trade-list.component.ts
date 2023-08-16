import { Component, OnInit } from '@angular/core';
import { Trade } from 'src/domain/Trade';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.css']
})
export class TradeListComponent implements OnInit {

  trades: Trade[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadTrades();
  }

  loadTrades(): void {
    this.apiService.getAllTrades().subscribe(
      (trades) => {
        this.trades = trades;
      },
      (error) => {
        console.error('Error fetching trades:', error);
      }
    );
  }
}
