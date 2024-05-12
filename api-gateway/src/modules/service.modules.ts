import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from '@nestjs/axios';
import { CrudModule } from './Crud/crud.module';

@Module({
  imports: [CrudModule, AuthModule, HttpModule],
})
export class ServiceModules {}
