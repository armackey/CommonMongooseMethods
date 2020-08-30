import mongoose from 'mongoose';

const SCHEMAS = {};

interface MongooseOptions {
  useNewUrlParser: boolean,
  useUnifiedTopology: boolean,
  useCreateIndex: boolean
}

export class CommonMongooseMethods {
  /**
   * 
   * @param params object that contains the schema name as the key and the schema as the value { user: User, message: Message }
   * @param uri string that points to database
   * @param options mongoose options
   */
  constructor(params: object, uri: string, options?: MongooseOptions) {
    Object.keys(params).map(key => {
      SCHEMAS[key] = params[key];
    });

    mongoose.connect(uri, options, (err) => {
      if (err) {
        console.log(err);
        return;
      }
  });
  }
}


export async function findOneById(modelType: any, _id: string): Promise<any> {
  const model = SCHEMAS[modelType];

  if (!SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }

  try {

    _id = mongoose.Types.ObjectId(_id) as any;

    const item = await model.findOne({ _id }).exec();

    return item;
  } catch (error) {
    return error;
  }
}

export async function findAll(modelType: any): Promise<any> {
  const model = SCHEMAS[modelType];

  if (!SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }
  
  try {
    const item = await model.find().exec();

    return item;
  } catch (error) {
    return error;
  }
}

export async function update(modelType: any, _id: string, data): Promise<any> {
  const model = SCHEMAS[modelType];

  try {

    _id = mongoose.Types.ObjectId(_id) as any;

    if (!SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }

    const item = await model.updateOne({ _id }, data, { multi: true }).exec();

    return item;
  } catch (error) {
    return error;
  }
}

export async function create(modelType: any, data): Promise<any> {
  const model = SCHEMAS[modelType];
  
  try {

    if (!SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }

    let item = new model(data).save();

    return item;
  } catch (error) {
    return error;
  }
}

export async function findByEmail(modelType: any, email: string, select: string = ""): Promise<any> {
  const model = SCHEMAS[modelType];

  try {

    if (!SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }

    let item = await model.find({ email }).select(select).exec();

    return item;
  } catch (error) {
    return error;
  }
}

export async function findByName(modelType: any, name: string, select: string = ""): Promise<any> {
  const model = SCHEMAS[modelType];

  try {

    if (!SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }

    let item = await model.find({ name }).select(select).exec();

    return item;
  } catch (error) {
    return error;
  }
}

export async function remove(modelType: any, _id: string): Promise<any> {
  const model = SCHEMAS[modelType];

  if (!SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }

  _id = mongoose.Types.ObjectId(_id) as any;

  return new Promise((resolve, reject) => {
    model.deleteOne({ _id }, (err, obj) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(obj);
    });
  });
}

export async function find(modelType: any, options?): Promise<any> {
  const model = SCHEMAS[modelType];

  if (!SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }

  return model.find(options).exec();
}
