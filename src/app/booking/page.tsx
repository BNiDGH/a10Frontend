"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { TextField, Select, MenuItem, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

export default function BookingPage() {
  const dispatch = useDispatch<AppDispatch>();

  const [nameLastname, setNameLastname] = useState("");
  const [tel, setTel] = useState("");
  const [venue, setVenue] = useState("Bloom");
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);

  const handleBookVenue = () => {
    if (nameLastname && tel && venue && bookDate) {
      dispatch(addBooking({
        nameLastname,
        tel,
        venue,
        bookDate: bookDate.format("YYYY-MM-DD")
      }));
      alert("Booking saved to Redux Store!");
    }
  };

  return (
    <main className="w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-2xl font-bold mb-6">Booking Venue</h1>
      
      <div className="bg-slate-100 rounded-lg p-6 w-full max-w-md shadow-sm space-y-4">
        <TextField 
          name="Name-Lastname" 
          label="Name-Lastname" 
          variant="outlined" 
          fullWidth 
          value={nameLastname}
          onChange={(e) => setNameLastname(e.target.value)}
        />
        <TextField 
          name="Contact-Number" 
          label="Contact-Number" 
          variant="outlined" 
          fullWidth 
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <Select 
          id="venue" 
          value={venue} 
          onChange={(e) => setVenue(e.target.value)}
          fullWidth
        >
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
        
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker 
            label="Booking Date" 
            value={bookDate}
            onChange={(newValue) => setBookDate(newValue)}
            className="w-full"
          />
        </LocalizationProvider>

        <Button 
          name="Book Venue" 
          variant="contained" 
          color="primary" 
          fullWidth 
          onClick={handleBookVenue}
        >
          Book Venue
        </Button>
      </div>
    </main>
  );
}