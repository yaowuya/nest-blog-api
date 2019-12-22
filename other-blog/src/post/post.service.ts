import {Injectable} from '@nestjs/common';
import {InjectModel} from 'nestjs-typegoose';
import {Post} from './post.model';
import {ReturnModelType} from '@typegoose/typegoose';

@Injectable()
export class PostService {
    constructor(@InjectModel(Post) private readonly PostModel: ReturnModelType<typeof Post>) {
    }

    async getPost() {
        return await this.PostModel.find();
    }
}
