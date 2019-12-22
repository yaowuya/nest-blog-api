import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PostModule} from './post/post.module';
import {TypegooseModule} from 'nestjs-typegoose';

@Module({
    imports: [TypegooseModule.forRoot('mongodb://127.0.0.1:27017/test', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }), PostModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
