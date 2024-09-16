
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  bookedTickets = [
    { movieName: 'Movie 1', theatreName: 'Theatre A', ticketsBooked: 90, status: 'BOOK ASAP' },
    { movieName: 'Movie 2', theatreName: 'Theatre B', ticketsBooked: 50, status: 'BOOK ASAP' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Fetch booked tickets from API
  }

  updateStatus(ticket: any) {
    if (ticket.ticketsBooked >= 100) {
      ticket.status = 'SOLD OUT';
    } else {
      ticket.status = 'BOOK ASAP';
    }
    // Call API to update ticket status
    console.log('Updating status for:', ticket);
  }
}

