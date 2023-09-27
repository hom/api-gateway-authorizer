import { Module } from '@nestjs/common';
import { JobModule } from './job/job.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [JobModule, UserModule],
})
export class AppModule {}
