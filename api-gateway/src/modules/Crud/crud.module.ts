import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';

@Module({
  imports: [HttpModule],
  controllers: [CrudController],
  providers: [CrudService],
  exports: [CrudService],
})
export class CrudModule {}
