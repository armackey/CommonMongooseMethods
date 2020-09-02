const mongoose = require('mongoose');
const SCHEMAS = {} as any;

export class CommonMongooseMethods {
  /**
   * 
   * @param params object that contains the schema name as the key and the schema as the value { user: User, message: Message }
   * @param uri string that points to database
   * @param options mongoose options
   */
  constructor(params: any, uri: string, options: any = {}) {
    Object.keys(params).map(key => {
      SCHEMAS[key] = params[key];
    });

    mongoose.connect(uri, options, (err: any) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  }
}

export interface PopulateOptions {
  path: string,
  model?: string,
  sort?: string,
  select?: string,
  limit?: string,
  skip?: string
};

export function addToSchemaList(obj: any): void {
  Object.keys(obj).map(key => {
    SCHEMAS[key] = obj[key];
  });
}

export async function findAll(modelType: string): Promise<any> {
  const model = SCHEMAS[modelType];

  if (!SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }
  
  try {
    const item = await model.find().exec();

    return item;
  } catch (error) {
    return error;
  }
}

export async function update(modelType: string, _id: string, data: any): Promise<any> {
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

export async function create(modelType: string, data: any): Promise<any> {
  const model = SCHEMAS[modelType];
  
  try {

    if (!SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }

    let item = new model(data).save();

    return item;
  } catch (error) {
    return error;
  }
}

export async function findByEmail(modelType: string, email: string, select: string = ""): Promise<any> {
  const model = SCHEMAS[modelType];

  try {

    if (!SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }

    let item = await model.find({ email }).select(select).exec();

    return item;
  } catch (error) {
    return error;
  }
}

export async function findByName(modelType: string, name: string, select: string = ""): Promise<any> {
  const model = SCHEMAS[modelType];

  try {

    if (!SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }

    let item = await model.find({ name }).select(select).exec();

    return item;
  } catch (error) {
    return error;
  }
}

export async function remove(modelType: string, _id: string): Promise<any> {
  const model = SCHEMAS[modelType];

  if (!SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }

  _id = mongoose.Types.ObjectId(_id) as any;

  return new Promise((resolve, reject) => {
    model.deleteOne({ _id }, (err: any, obj: any) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(obj);
    });
  });
}

export async function find(modelType: string, options?: any): Promise<any> {
  const model = SCHEMAS[modelType];

  if (!SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }

  return model.find(options).exec();
}

export async function findOneById(modelType: string, _id: string): Promise<any> {
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


export async function populate(modelType: string, _id: string, options: PopulateOptions): Promise<any> {
  const model = SCHEMAS[modelType];

  if (!SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }

  try {

    _id = mongoose.Types.ObjectId(_id) as any;

    const item = await model
      .find({ _id })
      .populate()
      .exec();

    return item;

  } catch (error) {
    
    return error;

  }

}