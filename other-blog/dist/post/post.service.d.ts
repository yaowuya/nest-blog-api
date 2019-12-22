import { Post } from './post.model';
import { ReturnModelType } from '@typegoose/typegoose';
export declare class PostService {
    private readonly PostModel;
    constructor(PostModel: ReturnModelType<typeof Post>);
    getPost(): Promise<import("@typegoose/typegoose").DocumentType<Post>[]>;
}
