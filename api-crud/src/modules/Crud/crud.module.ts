import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { PrismaService } from 'src/prisma.service';
import { CrudController } from './crud.controller';

@Module({
  imports: [],
  controllers: [CrudController],
  providers: [CrudService, PrismaService],
  exports: [CrudService],
})
export class CrudModule {}
