import mongoose from "mongoose";

export class MongooseConnection {
    
  static connect(): Promise<any> {
    const mongoUrl: string = process.env.MONGO_URI || 'mongodb://leisy:123@localhost:27017/poli';
    return new Promise((resolve, reject)=>{
        mongoose.connection.openUri(mongoUrl, (err, res)=>{
            if(err) reject(err)
            resolve('Database connected')
        })
    }) 
  }
}
