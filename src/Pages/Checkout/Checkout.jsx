import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
    const loadedService = useLoaderData();
    const {user} =useContext(AuthContext);
    const {_id, title, price, img} = loadedService;

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;
        const book = {
            customerName: name,
            email,
            date,
            price,
            img,
            service_id: _id
        }

        console.log(book);

        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        })
          .then((res) => res.json())
          .then((data) => {
                console.log(data);
            })
    };

  return (
    <div className="max-w-screen-xl mx-auto my-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Book Service: {title}
      </h1>
      <form onSubmit={handleBooking}>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              defaultValue={user?.displayName}
              required
            />
          </div>
          <div>
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              name="date"
              placeholder="Date"
              required
            />
          </div>
          <div>
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <div>
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="name"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
              defaultValue={price}
              readOnly
            />
          </div>
        </div>
        <input type="submit" value="Book Service" className="w-full bg-[#FF3811] px-5 py-2 rounded my-4 text-white font-bold cursor-pointer"/>
      </form>
    </div>
  );
};

export default Checkout;
