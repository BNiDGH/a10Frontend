import BookingList from "@/components/BookingList";

export default function MyBookingPage() {
  return (
    <main className="w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-2xl font-bold mb-6">My Booking</h1>
      <BookingList />
    </main>
  );
}