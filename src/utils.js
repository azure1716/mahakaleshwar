export const whatsappBookingLink = (data) => {
  const { name, checkIn, nights, guests, room } = data;
  const message = `Hello, I would like to book a room at Shri Mahakaleshwar Bhakta Niwas Dharamshala, Ujjain.%0A%0A` +
    `Name: ${name}%0A` +
    `Check-in: ${checkIn}%0A` +
    `Nights: ${nights}%0A` +
    `Guests: ${guests}%0A` +
    `Room: ${room}`;
  return `https://wa.me/919675278024?text=${message}`;
};