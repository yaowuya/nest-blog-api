declare class CreatePostDto {
    title: string;
    content: string;
}
export declare class PostController {
    index(): Promise<import("@hasezoey/typegoose").DocumentType<import("./post.model").Post>[]>;
    create(createPostDto: CreatePostDto): Promise<{
        success: boolean;
    }>;
    detail(id: string): Promise<import("@hasezoey/typegoose").DocumentType<import("./post.model").Post>>;
    update(id: string, updatePostDto: CreatePostDto): Promise<{
        success: boolean;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
export {};
