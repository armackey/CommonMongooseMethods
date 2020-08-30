const mongoose = require('mongoose');

export class CommonMongooseMethods {
  private SCHEMAS: any = {};
  /**
   * 
   * @param params object that contains the schema name as the key and the schema as the value { user: User, message: Message }
   * @param uri string that points to database
   * @param options mongoose options
   */
  constructor(params: any, uri: string, options: any = {}) {
    Object.keys(params).map(key => {
      this.SCHEMAS[key] = params[key];
    });

    mongoose.connect(uri, options, (err: any) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  }
  
  async findAll(modelType: any): Promise<any> {
    const model = this.SCHEMAS[modelType];
  
    if (!this.SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }
    
    try {
      const item = await model.find().exec();
  
      return item;
    } catch (error) {
      return error;
    }
  }
  
  async update(modelType: any, _id: string, data: any): Promise<any> {
    const model = this.SCHEMAS[modelType];
  
    try {
  
      _id = mongoose.Types.ObjectId(_id) as any;
  
      if (!this.SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }
  
      const item = await model.updateOne({ _id }, data, { multi: true }).exec();
  
      return item;
    } catch (error) {
      return error;
    }
  }
  
  async create(modelType: any, data: any): Promise<any> {
    const model = this.SCHEMAS[modelType];
    
    try {
  
      if (!this.SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }
  
      let item = new model(data).save();
  
      return item;
    } catch (error) {
      return error;
    }
  }
  
  async findByEmail(modelType: any, email: string, select: string = ""): Promise<any> {
    const model = this.SCHEMAS[modelType];
  
    try {
  
      if (!this.SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }
  
      let item = await model.find({ email }).select(select).exec();
  
      return item;
    } catch (error) {
      return error;
    }
  }
  
  async findByName(modelType: any, name: string, select: string = ""): Promise<any> {
    const model = this.SCHEMAS[modelType];
  
    try {
  
      if (!this.SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }
  
      let item = await model.find({ name }).select(select).exec();
  
      return item;
    } catch (error) {
      return error;
    }
  }
  
  async remove(modelType: any, _id: string): Promise<any> {
    const model = this.SCHEMAS[modelType];
  
    if (!this.SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }
  
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
  
  async find(modelType: any, options?: any): Promise<any> {
    const model = this.SCHEMAS[modelType];
  
    if (!this.SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }
  
    return model.find(options).exec();
  }

  async findOneById(modelType: any, _id: string): Promise<any> {
    const model = this.SCHEMAS[modelType];
  
    if (!this.SCHEMAS[modelType]) { throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods'); }
  
    try {
  
      _id = mongoose.Types.ObjectId(_id) as any;
  
      const item = await model.findOne({ _id }).exec();
  
      return item;
    } catch (error) {
      return error;
    }
  }
}


