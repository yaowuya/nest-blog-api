"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const nestjs_mongoose_crud_1 = require("nestjs-mongoose-crud");
const post_model_1 = require("./post.model");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const post_service_1 = require("./post.service");
let PostController = class PostController {
    constructor(model, postService) {
        this.model = model;
        this.postService = postService;
    }
    async index() {
        return await this.postService.getPost();
    }
};
__decorate([
    common_1.Get('/getPost/'),
    swagger_1.ApiOperation({ summary: '自定义接口', description: '列表' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "index", null);
PostController = __decorate([
    nestjs_mongoose_crud_1.Crud({
        model: post_model_1.Post,
    }),
    common_1.Controller('post'),
    swagger_1.ApiTags('帖子'),
    __param(0, nestjs_typegoose_1.InjectModel(post_model_1.Post)),
    __metadata("design:paramtypes", [Object, post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map