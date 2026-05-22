import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Booking } from '../../models/booking.interface';

@Component({
  selector: 'app-booking-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-detail.html',
  styleUrl: './booking-detail.scss',
})
export class BookingDetail {

  @Input()
  booking: Booking | null = null;

  reserveSpot(): void {
    alert('Booking confirmed!');
  }

}