import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('connected to database');
    return;
  }
};

try {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'share_prompt',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = true;
  console.log('connected to MongoDB');
} catch (error) {
  console.log('error connecting to database');
  console.log(error);
}
