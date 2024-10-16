import { Controller, Get, Post, Body, Redirect, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { BookingDto } from './booking.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('booking')
  getBookingForm() {
    return { errors: null, data: null };
  }

  @Post('book')
  @Redirect('/success', 302)
  handleBooking(@Body() bookingDto: BookingDto) {
    const errors = this.appService.validateBooking(bookingDto);
    if (errors.length > 0) {
      return { errors, data: bookingDto };
    }
    return { errors: null, data: null };
  }

  @Get('success')
  @Render('success')
  getSuccessPage() {
    return { message: 'Your booking was successful!' };
  }
}