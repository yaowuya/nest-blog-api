import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {ApiOperation, ApiProperty, ApiTags} from '@nestjs/swagger';
import {IsNotEmpty} from 'class-validator';
import {InjectModel} from 'nestjs-typegoose';
import {Post as PostSchema} from './post.model';
import {ModelType} from '@typegoose/typegoose/lib/types';
import {Crud} from 'nestjs-mongoose-crud';

@Crud({
    model: PostSchema,
})
@Controller('post')
@ApiTags('帖子')
export class PostController {
    constructor(@InjectModel(PostSchema) private readonly model: ModelType<PostSchema>) {
    }
}
