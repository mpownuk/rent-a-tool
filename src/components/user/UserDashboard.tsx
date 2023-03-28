import React from "react";

const UserDashboard: React.FC = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "555-555-5555",
    rentedTools: [
      { name: "Hammer", rentalPeriod: "3 days", returnDate: "03/16/2023" },
      { name: "Saw", rentalPeriod: "7 days", returnDate: "03/23/2023" },
      { name: "Drill", rentalPeriod: "1 day", returnDate: "03/10/2023" },
    ],
    rentalHistory: [
      {
        name: "Circular Saw",
        rentalPeriod: "5 days",
        returnDate: "03/02/2023",
      },
      {
        name: "Power Drill",
        rentalPeriod: "2 days",
        returnDate: "02/24/2023",
      },
    ],
    wishlist: [
      { name: "Chainsaw", price: "$25.00", available: true },
      { name: "Nail Gun", price: "$35.00", available: false },
      { name: "Table Saw", price: "$50.00", available: true },
    ],
    paymentMethods: [
      {
        id: 1,
        type: "Visa",
        number: "**** **** **** 1234",
        expiration: "12/24",
      },
      {
        id: 2,
        type: "Mastercard",
        number: "**** **** **** 5678",
        expiration: "08/23",
      },
    ],
  };

  const handleAddPaymentMethod = () => {
    // Logic for adding a payment method
  };

  const handleRemovePaymentMethod = (id: number) => {
    console.log(id);
    // Logic for removing a payment method with the given id
  };

  return (
    <div className="user-profile">
      <div className="user-profile__section">
        <h2>Profile Information</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
      <div className="user-profile__section">
        <h2>Tools Rented</h2>
        {user.rentedTools.length === 0 ? (
          <p>No tools currently rented</p>
        ) : (
          <ul>
            {user.rentedTools.map((tool, idx) => (
              <li key={idx}>
                {tool.name} (rental period: {tool.rentalPeriod}, return date:{" "}
                {tool.returnDate})
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="user-profile__section">
        <h2>Rental History</h2>
        {user.rentalHistory.length === 0 ? (
          <p>No rental history</p>
        ) : (
          <ul>
            {user.rentalHistory.map((tool, idx) => (
              <li key={idx}>
                {tool.name} (rental period: {tool.rentalPeriod}, return date:{" "}
                {tool.returnDate})
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="user-profile__section">
        <h2>Wishlist</h2>
        {user.wishlist.length === 0 ? (
          <p>No items in wishlist</p>
        ) : (
          <ul>
            {user.wishlist.map((tool, idx) => (
              <li key={idx}>
                {tool.name} ({tool.price}){" "}
                {tool.available ? "(available)" : "(not available)"}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="payment-information">
        <h2>Payment Information</h2>
        <div className="payment-methods">
          <h3>Payment Methods</h3>
          <ul>
            {user.paymentMethods.map((method) => (
              <li key={method.id}>
                {method.type} ending in {method.number.slice(-4)} exp.{" "}
                {method.expiration}
                <button onClick={() => handleRemovePaymentMethod(method.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleAddPaymentMethod}>Add Payment Method</button>
        </div>
        <div className="billing-information">
          <h3>Billing Information</h3>
          <form>
            <label htmlFor="name">Name on Card</label>
            <input type="text" name="name" />
            <label htmlFor="card-number">Card Number</label>
            <input type="text" name="card-number" />
            <label htmlFor="expiration-date">Expiration Date</label>
            <input type="text" name="expiration-date" />
            <label htmlFor="security-code">Security Code</label>
            <input type="text" name="security-code" />
            <button type="submit">Update Billing Information</button>
          </form>
        </div>
        <div className="payment-history">
          <h3>Payment History</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>03/01/2023</td>
                <td>Rental fee for hammer</td>
                <td>$5.00</td>
              </tr>
              <tr>
                <td>02/01/2023</td>
                <td>Rental fee for saw</td>
                <td>$10.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default UserDashboard;
