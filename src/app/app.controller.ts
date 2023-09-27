import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('job')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':jobId')
  getJob(@Param('jobId') jobId: string): string {
    return this.appService.getJob(jobId);
  }

  @Post()
  createJob(): string {
    return this.appService.createJob();
  }
}
