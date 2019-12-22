import { Post as PostSchema } from './post.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { PostService } from './post.service';
export declare class PostController {
    private readonly model;
    private readonly postService;
    constructor(model: ModelType<PostSchema>, postService: PostService);
    index(): Promise<import("@typegoose/typegoose/lib/types").DocumentType<PostSchema>[]>;
}
