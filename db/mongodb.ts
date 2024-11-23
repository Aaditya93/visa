// // lib/db.ts
// import mongoose from 'mongoose';

// const MONGO_URI = process.env.MONGO_URI || 'your-mongodb-connection-string';

// const dbConnect = async () => {
//   if (mongoose.connection.readyState >= 1) return;

//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.error("Database connection error:", error);
//   }
// };

// export default dbConnect;

