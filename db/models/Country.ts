import dbConnect from '@/lib/db';
import mongoose, { Schema, Document, Model } from 'mongoose';



const VisaSchema: Schema = new Schema({
  type: { type: String, required: true },
  entry: { type: String, required: true },
  timeRequired: { type: Number, required: true },
  duration: { type: Number, required: true },
  validaity: { type: Number, required: true },
  cost: { type: Number, required: true },
  price: { type: Number, required: true },
});


const CountrySchema: Schema = new Schema({
  country: { type: String, required: true },
  image: { type: [String], required: true },
  visa: { type: [VisaSchema], required: true },
});


export interface IVisa extends Document {
  type: string;
  entry: string;
  timeRequired: number;
  duration: number;
  validaity: number;
  cost: number;
  price: number;
}

export interface ICountry extends Document {
  country: string;
  image: string[];
  visa: IVisa[];
}


const Country: Model<ICountry> =
  mongoose.models.Country || mongoose.model<ICountry>('Country', CountrySchema);

export default Country;


export const getCountry = async (country: string) => {
   await dbConnect();
  try{

    const data = await Country.findOne({country: country});
    return data;

  }
  catch(e){
    console.log(e);
  }
}

