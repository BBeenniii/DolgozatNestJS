import { Injectable } from '@nestjs/common';
import { BookingDto } from './booking.dto';
import * as moment from 'moment';

@Injectable()
export class AppService {
  validateBooking(bookingDto: BookingDto) {
    const errors = [];
    const { name, email, dateTime, numberOfGuests } = bookingDto;

    if (!name || name.trim().length === 0) {
      errors.push('Name is required.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.push('Valid email is required.');
    }

    const now = new Date();
    const selectedDate = new Date(dateTime);

    if (!dateTime || isNaN(selectedDate.getTime())) {
      errors.push('Date and time is required and must be valid.');
    } else if (selectedDate <= now) {
      errors.push('Date and time must be in the future.');
    }

    if (!numberOfGuests || numberOfGuests < 1 || numberOfGuests > 10) {
      errors.push('Number of guests must be between 1 and 10.');
    }

    return errors;
  }
}