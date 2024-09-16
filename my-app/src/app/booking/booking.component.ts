import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      movieName: ['', Validators.required],
      theatreName: ['', Validators.required],
      numberOfTickets: [1, [Validators.required, Validators.min(1)]],
      seatNumber: ['', Validators.required]
    });
  }

  bookTickets() {
    // Call API to book tickets
    console.log('Booking tickets:', this.bookingForm.value);
  }
}
