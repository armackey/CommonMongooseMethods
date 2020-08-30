export declare class CommonMongooseMethods {
    private SCHEMAS;
    /**
     *
     * @param params object that contains the schema name as the key and the schema as the value { user: User, message: Message }
     * @param uri string that points to database
     * @param options mongoose options
     */
    constructor(params: any, uri: string, options?: any);
    findAll(modelType: any): Promise<any>;
    update(modelType: any, _id: string, data: any): Promise<any>;
    create(modelType: any, data: any): Promise<any>;
    findByEmail(modelType: any, email: string, select?: string): Promise<any>;
    findByName(modelType: any, name: string, select?: string): Promise<any>;
    remove(modelType: any, _id: string): Promise<any>;
    find(modelType: any, options?: any): Promise<any>;
    findOneById(modelType: any, _id: string): Promise<any>;
}
