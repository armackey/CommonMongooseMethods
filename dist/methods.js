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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var SCHEMAS = {};
var CommonMongooseMethods = /** @class */ (function () {
    /**
     *
     * @param params object that contains the schema name as the key and the schema as the value { user: User, message: Message }
     * @param uri string that points to database
     * @param options mongoose options
     */
    function CommonMongooseMethods(params, uri, options) {
        if (options === void 0) { options = {}; }
        Object.keys(params).map(function (key) {
            SCHEMAS[key] = params[key];
        });
        mongoose.connect(uri, options, function (err) {
            if (err) {
                console.log(err);
                return;
            }
        });
    }
    return CommonMongooseMethods;
}());
exports.CommonMongooseMethods = CommonMongooseMethods;
;
function addToSchemaList(obj) {
    Object.keys(obj).map(function (key) {
        SCHEMAS[key] = obj[key];
    });
}
exports.addToSchemaList = addToSchemaList;
function findAll(modelType) {
    return __awaiter(this, void 0, void 0, function () {
        var model, item, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    model = SCHEMAS[modelType];
                    if (!SCHEMAS[modelType]) {
                        throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, model.find().exec()];
                case 2:
                    item = _a.sent();
                    return [2 /*return*/, item];
                case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, error_1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.findAll = findAll;
function update(modelType, _id, data) {
    return __awaiter(this, void 0, void 0, function () {
        var model, item, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    model = SCHEMAS[modelType];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    _id = mongoose.Types.ObjectId(_id);
                    if (!SCHEMAS[modelType]) {
                        throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
                    }
                    return [4 /*yield*/, model.updateOne({ _id: _id }, data, { multi: true }).exec()];
                case 2:
                    item = _a.sent();
                    return [2 /*return*/, item];
                case 3:
                    error_2 = _a.sent();
                    return [2 /*return*/, error_2];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.update = update;
function create(modelType, data) {
    return __awaiter(this, void 0, void 0, function () {
        var model, item;
        return __generator(this, function (_a) {
            model = SCHEMAS[modelType];
            try {
                if (!SCHEMAS[modelType]) {
                    throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
                }
                item = new model(data).save();
                return [2 /*return*/, item];
            }
            catch (error) {
                return [2 /*return*/, error];
            }
            return [2 /*return*/];
        });
    });
}
exports.create = create;
function findByEmail(modelType, email, select) {
    if (select === void 0) { select = ""; }
    return __awaiter(this, void 0, void 0, function () {
        var model, item, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    model = SCHEMAS[modelType];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    if (!SCHEMAS[modelType]) {
                        throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
                    }
                    return [4 /*yield*/, model.find({ email: email }).select(select).exec()];
                case 2:
                    item = _a.sent();
                    return [2 /*return*/, item];
                case 3:
                    error_3 = _a.sent();
                    return [2 /*return*/, error_3];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.findByEmail = findByEmail;
function findByName(modelType, name, select) {
    if (select === void 0) { select = ""; }
    return __awaiter(this, void 0, void 0, function () {
        var model, item, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    model = SCHEMAS[modelType];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    if (!SCHEMAS[modelType]) {
                        throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
                    }
                    return [4 /*yield*/, model.find({ name: name }).select(select).exec()];
                case 2:
                    item = _a.sent();
                    return [2 /*return*/, item];
                case 3:
                    error_4 = _a.sent();
                    return [2 /*return*/, error_4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.findByName = findByName;
function remove(modelType, _id) {
    return __awaiter(this, void 0, void 0, function () {
        var model;
        return __generator(this, function (_a) {
            model = SCHEMAS[modelType];
            if (!SCHEMAS[modelType]) {
                throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
            }
            _id = mongoose.Types.ObjectId(_id);
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    model.deleteOne({ _id: _id }, function (err, obj) {
                        if (err) {
                            reject(err);
                            return;
                        }
                        resolve(obj);
                    });
                })];
        });
    });
}
exports.remove = remove;
function find(modelType, options) {
    return __awaiter(this, void 0, void 0, function () {
        var model;
        return __generator(this, function (_a) {
            model = SCHEMAS[modelType];
            if (!SCHEMAS[modelType]) {
                throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
            }
            return [2 /*return*/, model.find(options).exec()];
        });
    });
}
exports.find = find;
function findOneById(modelType, _id) {
    return __awaiter(this, void 0, void 0, function () {
        var model, item, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    model = SCHEMAS[modelType];
                    if (!SCHEMAS[modelType]) {
                        throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    _id = mongoose.Types.ObjectId(_id);
                    return [4 /*yield*/, model.findOne({ _id: _id }).exec()];
                case 2:
                    item = _a.sent();
                    return [2 /*return*/, item];
                case 3:
                    error_5 = _a.sent();
                    return [2 /*return*/, error_5];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.findOneById = findOneById;
function populate(modelType, _id, options) {
    return __awaiter(this, void 0, void 0, function () {
        var model, item, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    model = SCHEMAS[modelType];
                    if (!SCHEMAS[modelType]) {
                        throw new Error('Schema Type not set during instance. Add type in CommonMongooseMethods');
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    _id = mongoose.Types.ObjectId(_id);
                    return [4 /*yield*/, model
                            .find({ _id: _id })
                            .populate()
                            .exec()];
                case 2:
                    item = _a.sent();
                    return [2 /*return*/, item];
                case 3:
                    error_6 = _a.sent();
                    return [2 /*return*/, error_6];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.populate = populate;
