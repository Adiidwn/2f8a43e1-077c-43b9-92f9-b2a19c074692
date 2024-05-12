import { Module } from '@nestjs/common';
import { AuthModule } from './auths/auth.module';

@Module({
  imports: [AuthModule],
})
export class ServiceModules {}
