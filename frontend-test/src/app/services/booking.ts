import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Booking } from '../models/booking.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookings: Booking[] = [
    {
      id: 1,
      className: 'Yoga',
      instructor: 'Laura Gómez',
      schedule: 'Lunes 18:00',
      availableSpots: 10
    },
    {
      id: 2,
      className: 'Crossfit',
      instructor: 'Carlos Hernández',
      schedule: 'Martes 19:00',
      availableSpots: 5
    },
    {
      id: 3,
      className: 'Calistenia',
      instructor: 'Miguel Angel',
      schedule: 'Miércoles 20:00',
      availableSpots: 7
    }
  ];

  getBookings(): Observable<Booking[]> {
    return of(this.bookings);
  }
}
