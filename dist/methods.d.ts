export declare class CommonMongooseMethods {
    /**
     *
     * @param params object that contains the schema name as the key and the schema as the value { user: User, message: Message }
     * @param uri string that points to database
     * @param options mongoose options
     */
    constructor(params: any, uri: string, options?: any);
}
export declare function findAll(modelType: any): Promise<any>;
export declare function update(modelType: any, _id: string, data: any): Promise<any>;
export declare function create(modelType: any, data: any): Promise<any>;
export declare function findByEmail(modelType: any, email: string, select?: string): Promise<any>;
export declare function findByName(modelType: any, name: string, select?: string): Promise<any>;
export declare function remove(modelType: any, _id: string): Promise<any>;
export declare function find(modelType: any, options?: any): Promise<any>;
export declare function findOneById(modelType: any, _id: string): Promise<any>;
