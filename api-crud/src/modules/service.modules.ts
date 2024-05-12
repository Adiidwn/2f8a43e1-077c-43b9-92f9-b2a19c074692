import { Module } from '@nestjs/common';
import { CrudModule } from './Crud/crud.module';

@Module({
  imports: [CrudModule],
})
export class ServiceModules {}
