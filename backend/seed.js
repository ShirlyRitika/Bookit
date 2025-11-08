import mongoose from "mongoose";
import dotenv from "dotenv";
import Experience from "./models/Experience.js";

dotenv.config();

const DATA = [
  {
    title: "Kayaking Adventure",
    location: "Udupi, Karnataka",
    price: 999,
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Paddle through calm waters surrounded by nature — all safety gear provided.",
  },
  {
    title: "Beach Camping",
    location: "Goa Coastline",
    price: 1299,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Bonfire nights, beach tents, and relaxing waves — a coastal camping dream.",
  },
  {
  title: "Forest Safari",
  location: "Bandipur Reserve",
  price: 1999,
  image: "https://media.istockphoto.com/id/1266946595/photo/spotted-deer-axis-axis-dhikala-jim-corbett-national-park-uttrakhand-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=EE6UXVb8Iqq3kyvjFUKBgPjdWmLXFoQvapz4IuUsHNQ=",
  excerpt: "Witness wild animals in their natural habitat with trained naturalists.",
},
  {
    title: "Mountain Trekking",
    location: "Himalayas, Uttarakhand",
    price: 2499,
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Breathtaking views, ridge climbs, and peaceful camps at sunrise.",
  },
  {
  title: "Scuba Diving",
  location: "Andaman Islands",
  price: 2999,
  image: "https://th.bing.com/th/id/OIP.-UZ4CjAM2CrfHrC5oik_vAHaFj?w=239&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  excerpt: "Explore coral reefs and marine life in crystal-clear blue waters.",
},
  {
  title: "Car Ride",
  location: "Jaipur, Rajasthan",
  price: 1799,
  image: "https://images.unsplash.com/photo-1642189673400-2c5f1253af27?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJtdyUyMGNhciUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
  excerpt: "Fly above Jaipur’s forts and deserts as the sun rises — unforgettable views.",
},
  {
    title: "Desert Camping",
    location: "Jaisalmer, Rajasthan",
    price: 1599,
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Golden dunes, camel rides, and folk music under the starry night sky.",
  },
  {
  title: "River Rafting",
  location: "Rishikesh, Uttarakhand",
  price: 1399,
  image: "https://images.unsplash.com/photo-1549904625-6ca1bd49c947?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJpdmVyJTIwcmFmdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  excerpt: "Thrilling rapids, lush valley views, and refreshing adventure.",
},
  {
    title: "Paragliding",
    location: "Bir Billing, Himachal Pradesh",
    price: 2699,
    image: "https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Soar through the sky with panoramic views — India’s best paragliding spot.",
  },
];


mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Experience.deleteMany({});
    await Experience.insertMany(DATA);
    console.log("✅ Database reseeded with new images!");
    mongoose.connection.close();
  })
  .catch((err) => console.error(err));
