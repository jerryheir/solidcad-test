import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Contact } from './contact/contact.entity';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      useFactory: () => ({
        type: 'mongodb',
        url: 'mongodb+srv://jerry:GeniusOfFangshi@cluster0.wne0s.mongodb.net/?retryWrites=true&w=majority',
        entities: [Contact],
        synchronize: true,
        useNewUrlParser: true,
        logging: true,
      }),
      inject: [],
    }),
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
