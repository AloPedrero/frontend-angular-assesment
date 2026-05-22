import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { BookingService } from '../../services/booking';
import { Booking } from '../../models/booking.interface';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-list.html',
  styleUrl: './booking-list.scss',
})
export class BookingList implements OnInit {

  bookings: Booking[] = [];

  @Output()
  bookingSelected = new EventEmitter<Booking>();

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe(data => {
      this.bookings = data;
    });
  }

  selectBooking(booking: Booking): void {
    this.bookingSelected.emit(booking);
  }

}