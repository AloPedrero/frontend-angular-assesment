import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking';
import { Booking } from '../../models/booking.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-list.html',
  styleUrl: './booking-list.scss',
})

export class BookingList implements OnInit {

  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe(data => {
      this.bookings = data;
    });
  }

}