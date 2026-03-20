"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";
import { Button } from "@mui/material";

export default function BookingList() {
  const bookItems = useSelector((state: RootState) => state.bookSlice.bookItems);
  const dispatch = useDispatch<AppDispatch>();

  if (bookItems.length === 0) {
    return <div className="text-center text-xl mt-10">No Venue Booking</div>;
  }

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {bookItems.map((item, index) => (
        <div key={index} className="bg-slate-100 rounded-lg p-6 w-full max-w-md shadow-sm text-gray-800">
          <p><strong>Name:</strong> {item.nameLastname}</p>
          <p><strong>Tel:</strong> {item.tel}</p>
          <p><strong>Venue:</strong> {item.venue}</p>
          <p><strong>Date:</strong> {item.bookDate}</p>
          
          <Button 
            variant="contained" 
            color="error" 
            className="mt-4"
            fullWidth
            onClick={() => dispatch(removeBooking(item))}
          >
            Cancel Booking
          </Button>
        </div>
      ))}
    </div>
  );
}