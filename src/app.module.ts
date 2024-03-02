import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),BooksModule],

})
export class AppModule {}
