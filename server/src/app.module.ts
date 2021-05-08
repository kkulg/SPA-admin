import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './login/login.module';

@Module({
  imports: [TypeOrmModule.forRoot(), LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
