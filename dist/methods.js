"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = exports.remove = exports.findByName = exports.findByEmail = exports.create = exports.update = exports.findAll = exports.findOneById = exports.CommonMongooseMethods = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const SCHEMAS = {};
class CommonMongooseMethods {
    /**
     *
     * @param params object that contains the schema name as the key and the schema as the value { user: User, message: Message }
     * @param uri string that points to database
     * @param options mongoose options
     */
    constructor(params, uri, options) {
        Object.keys(params).map(key => {
            SCHEMAS[key] = params[key];
        });
        mongoose_1.default.connect(uri, options, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
    }
}
exports.CommonMongooseMethods = CommonMongooseMethods;
function findOneById(modelType, _id) {
    return __awaiter(this, void 0, void 0, function* () {
        const model = SCHEMAS[modelType];
        if (!SCHEMAS[modelType]) {
            throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
        }
        try {
            _id = mongoose_1.default.Types.ObjectId(_id);
            const item = yield model.findOne({ _id }).exec();
            return item;
        }
        catch (error) {
            return error;
        }
    });
}
exports.findOneById = findOneById;
function findAll(modelType) {
    return __awaiter(this, void 0, void 0, function* () {
        const model = SCHEMAS[modelType];
        if (!SCHEMAS[modelType]) {
            throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
        }
        try {
            const item = yield model.find().exec();
            return item;
        }
        catch (error) {
            return error;
        }
    });
}
exports.findAll = findAll;
function update(modelType, _id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const model = SCHEMAS[modelType];
        try {
            _id = mongoose_1.default.Types.ObjectId(_id);
            if (!SCHEMAS[modelType]) {
                throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
            }
            const item = yield model.updateOne({ _id }, data, { multi: true }).exec();
            return item;
        }
        catch (error) {
            return error;
        }
    });
}
exports.update = update;
function create(modelType, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const model = SCHEMAS[modelType];
        try {
            if (!SCHEMAS[modelType]) {
                throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
            }
            let item = new model(data).save();
            return item;
        }
        catch (error) {
            return error;
        }
    });
}
exports.create = create;
function findByEmail(modelType, email, select = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const model = SCHEMAS[modelType];
        try {
            if (!SCHEMAS[modelType]) {
                throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
            }
            let item = yield model.find({ email }).select(select).exec();
            return item;
        }
        catch (error) {
            return error;
        }
    });
}
exports.findByEmail = findByEmail;
function findByName(modelType, name, select = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const model = SCHEMAS[modelType];
        try {
            if (!SCHEMAS[modelType]) {
                throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
            }
            let item = yield model.find({ name }).select(select).exec();
            return item;
        }
        catch (error) {
            return error;
        }
    });
}
exports.findByName = findByName;
function remove(modelType, _id) {
    return __awaiter(this, void 0, void 0, function* () {
        const model = SCHEMAS[modelType];
        if (!SCHEMAS[modelType]) {
            throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
        }
        _id = mongoose_1.default.Types.ObjectId(_id);
        return new Promise((resolve, reject) => {
            model.deleteOne({ _id }, (err, obj) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(obj);
            });
        });
    });
}
exports.remove = remove;
function find(modelType, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const model = SCHEMAS[modelType];
        if (!SCHEMAS[modelType]) {
            throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
        }
        return model.find(options).exec();
    });
}
exports.find = find;
//# sourceMappingURL=methods.js.map