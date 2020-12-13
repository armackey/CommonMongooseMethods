export declare class CommonMongooseMethods {
    /**
     *
     * @param params object that contains the schema name as the key and the schema as the value { user: User, message: Message }
     * @param uri string that points to database
     * @param options mongoose options
     */
    constructor(params: any, uri: string, options?: any);
}
export interface PopulateOptions {
    path: string;
    model?: string;
    sort?: string;
    select?: string;
    limit?: string;
    skip?: string;
}
export declare function addToSchemaList(obj: any): void;
export declare function findAll<T>(modelType: string): Promise<T>;
export declare function update<T>(modelType: string, _id: string, data: any): Promise<T>;
export declare function create<T>(modelType: string, data: any): Promise<T>;
export declare function findByEmail<T>(modelType: string, email: string, select?: string): Promise<T>;
export declare function findByName<T>(modelType: string, name: string, select?: string): Promise<T>;
export declare function remove<T>(modelType: string, _id: string): Promise<T>;
export declare function find<T>(modelType: string, options?: any): Promise<T>;
export declare function findOneById(modelType: string, _id: string): Promise<any>;
export declare function populate<T>(modelType: string, _id: string, options: PopulateOptions): Promise<T>;
