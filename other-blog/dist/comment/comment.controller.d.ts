declare class CreatePostDto {
    title: string;
    content: string;
}
export declare class CommentController {
    index(): Promise<import("@hasezoey/typegoose").DocumentType<import("./comment.model").Comment>[]>;
    create(createPostDto: CreatePostDto): Promise<{
        success: boolean;
    }>;
    detail(id: string): Promise<import("@hasezoey/typegoose").DocumentType<import("./comment.model").Comment>>;
    update(id: string, updatePostDto: CreatePostDto): Promise<{
        success: boolean;
    }>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
export {};
