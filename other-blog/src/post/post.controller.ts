import {Controller, Get} from '@nestjs/common';
import {ApiOperation, ApiTags} from '@nestjs/swagger';
import {Crud} from 'nestjs-mongoose-crud';
import {Post as PostSchema} from './post.model';
import {InjectModel} from 'nestjs-typegoose';
import {ModelType} from '@typegoose/typegoose/lib/types';
import {PostService} from './post.service';

@Crud({
    model: PostSchema,
})
@Controller('post')
@ApiTags('帖子')
export class PostController {
    constructor(@InjectModel(PostSchema) private readonly model: ModelType<PostSchema>,
                private readonly postService: PostService) {
    }

    @Get('/getPost/')
    @ApiOperation({summary: '自定义接口', description: '列表'})
    async index() {
        return await this.postService.getPost();
    }
}
