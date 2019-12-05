import mongoose from 'mongoose';

const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    // use existing db connection
    console.log('Using existing mongoose connection');
    return;
  }
  // use a new db connection
  const db = await mongoose.connect(
    process.env.MONGO_SRV,
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    err => {
      if (err) {
        console.log(err);
      }
    },
  );
  console.log('MongoDB connected');
  connection.isConnected = db.connections[0].readyState;
}

export default connectDb;
