import { Component } from '@angular/core';
import { BookingList } from './components/booking-list/booking-list';
import { BookingDetail } from './components/booking-detail/booking-detail';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BookingList,
    BookingDetail
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}