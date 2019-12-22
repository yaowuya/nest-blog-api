import { Post as PostSchema } from './post.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
export declare class PostController {
    private readonly model;
    constructor(model: ModelType<PostSchema>);
}
