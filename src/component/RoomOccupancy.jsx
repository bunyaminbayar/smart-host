import React, { useState } from "react";

// Import CSS
import './roomOccupancy.css';

const HotelBookingApp = () => {

  // Define states for the number of available premium and economy rooms and the list of potential guests
  const [premiumRooms, setPremiumRooms] = useState(0);
  const [economyRooms, setEconomyRooms] = useState(0);
  const [potentialGuests] = useState([23,45,155,374,22,99,100,101,115,209,]);

  // Define states for the number of available premium and economy rooms and the list of potential guests
  const handlePremiumRoomsChange = (event) => {
    setPremiumRooms(parseInt(event.target.value));
  };

  const handleEconomyRoomsChange = (event) => {
    setEconomyRooms(parseInt(event.target.value));
  };

  // Function to calculate the number of occupied rooms and total revenue
  const calculateOccupancyAndRevenue = () => {

    // Sort potential guests array in descending order of willingness to pay
    const sortedGuests = [...potentialGuests].sort((a, b) => b - a);

     // Initialize variables for occupied rooms and revenue for each category
    let premiumOccupancy = 0;
    let economyOccupancy = 0;
    let premiumRevenue = 0;
    let economyRevenue = 0;

    // Rules for room and clients
    sortedGuests.forEach((guest) => {
      if (guest >= 100 && premiumRooms > premiumOccupancy) {
        premiumOccupancy++;
        premiumRevenue += guest;
      } else if (guest < 100 && economyRooms > economyOccupancy) {
        economyOccupancy++;
        economyRevenue += guest;
      }
    });

    // Return object with the number of occupied rooms and revenue for each category
    return {
      premiumOccupancy,
      economyOccupancy,
      premiumRevenue,
      economyRevenue,
    };
  };

   // Calculate the number of occupied rooms and total revenue using the calculateOccupancyAndRevenue function
  const {
    premiumOccupancy,
    economyOccupancy,
    premiumRevenue,
    economyRevenue,
  } = calculateOccupancyAndRevenue();

  const totalOccupancy = premiumOccupancy + economyOccupancy;
  const totalRevenue = premiumRevenue + economyRevenue;

  return (
    <div className="card">
      <h1 className="header">Hotel Booking App</h1>
      <div className="inputs">
        <div className="col">
          <label htmlFor="premium-rooms">Premium Rooms</label>
          <input
            id="premium-rooms"
            type="number"
            min="0"
            value={premiumRooms}
            onChange={handlePremiumRoomsChange}
          />
        </div>
        <div className="col">
          <label htmlFor="economy-rooms">Economy Rooms</label>
          <input
            id="economy-rooms"
            type="number"
            min="0"
            value={economyRooms}
            onChange={handleEconomyRoomsChange}
          />
        </div>
      </div>
      <p>Premium Occupancy: <b>{premiumOccupancy}</b></p>
      <p>Economy Occupancy: <b>{economyOccupancy}</b></p>
      <hr />
      <p><b>Total Occupancy: {totalOccupancy}</b></p>
      <hr />
      <p>Premium Revenue: <b>{premiumRevenue}</b></p>
      <p>Economy Revenue: <b>{economyRevenue}</b></p>
      <hr className="totalRevanuHr" />
      <p className="totalRevanu">Total Revenue: {totalRevenue}</p>
    </div>
  );
};

export default HotelBookingApp;
