import { Injectable } from '@nestjs/common';
import { BookingDto } from './booking.dto';

@Injectable()
export class AppService {
  validateBooking(bookingDto: BookingDto) {
    const errors = ["asd"];
    const { name, email, dateTime, numberOfGuests } = bookingDto;

    if (!name || name.trim().length === 0) {
      errors.push('Name is required.');
    }
  }
}