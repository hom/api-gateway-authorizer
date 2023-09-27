import { Controller, Get, Param, Post } from '@nestjs/common';
import { JobService } from './job.service';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  getJobs() {
    return this.jobService.getJobs();
  }

  @Get(':jobId')
  getJobById(@Param('jobId') jobId: string): string {
    return this.jobService.getJobById(jobId);
  }

  @Post()
  createJob(): string {
    return this.jobService.createJob();
  }
}
