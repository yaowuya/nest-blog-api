import {prop} from '@typegoose/typegoose';
import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty} from 'class-validator';

export class Post {
    @ApiProperty({description: '帖子标题', example: '帖子标题1'})
    @IsNotEmpty({message: '请输入标题'})
    @prop()
    title: string;
    @ApiProperty({description: '帖子内容', example: '帖子内容1'})
    @prop()
    content: string;
}
