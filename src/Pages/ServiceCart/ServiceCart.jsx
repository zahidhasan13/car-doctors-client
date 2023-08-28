import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ServiceCartRow from "./ServiceCartRow";
import Swal from "sweetalert2";

const ServiceCart = () => {
  const { user, cart, setCart } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [url]);

  const handleDeleteCart = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = cart.filter((svc) => svc._id !== _id);
              setCart(remaining);
            }
          });
      }
    });
  };

  const handleConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`,{
      method: "PATCH",  
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "confirm",
      }),
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0) {
        const remaining = cart.filter(ct => ct._id !== id);
        const confirmed = cart.find(ct => ct._id === id);
        confirmed.status = "confirm";
        const newCart = [...remaining, confirmed];
        setCart(newCart);
      }
    })
  }

  return (
    <div className="max--w-screen-xl mx-auto my-8">
      <h1 className="text-white text-3xl font-bold text-center">
        Total Bookings: {cart?.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Service Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((serviceCart) => (
              <ServiceCartRow
                key={serviceCart._id}
                serviceCart={serviceCart}
                handleDeleteCart={handleDeleteCart}
                handleConfirm={handleConfirm}
              ></ServiceCartRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceCart;
