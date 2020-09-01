export declare class CommonMongooseMethods {
    /**
     *
     * @param params object that contains the schema name as the key and the schema as the value { user: User, message: Message }
     * @param uri string that points to database
     * @param options mongoose options
     */
    constructor(params: any, uri: string, options?: any);
}
export declare function addToSchemaList(obj: any): void;
export declare function findAll(modelType: string): Promise<any>;
export declare function update(modelType: string, _id: string, data: any): Promise<any>;
export declare function create(modelType: string, data: any): Promise<any>;
export declare function findByEmail(modelType: string, email: string, select?: string): Promise<any>;
export declare function findByName(modelType: string, name: string, select?: string): Promise<any>;
export declare function remove(modelType: string, _id: string): Promise<any>;
export declare function find(modelType: string, options?: any): Promise<any>;
export declare function findOneById(modelType: string, _id: string): Promise<any>;
