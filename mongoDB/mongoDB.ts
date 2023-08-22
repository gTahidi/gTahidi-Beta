import { MongoClient } from 'mongodb';

const connectToDB = async () => {
  const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING);
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  } finally {
    await client.close();
  }
};

export { connectToDB };

