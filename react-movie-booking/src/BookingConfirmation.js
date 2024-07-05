// BookingConfirmation.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

function BookingConfirmation() {
  const location = useLocation();
  const { name, email, mobile, bookingId } = location.state;

  return (
    <div>
      <div className="booking-confirmation">
        <h1>Seat Booked Successfully!</h1>
        <div className="confirmation-details">
          <p>
            <strong>Booking ID:</strong> {bookingId}
          </p>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Mobile:</strong> {mobile}
          </p>
        </div>
      </div>
      <div className="button-container">
        <Link to="/">
          <button className="homepage-button">Go to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default BookingConfirmation;
