import { randomUUID as uuid } from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JobService {
  getJobs() {
    return new Array(12).fill(0);
  }

  getJobById(jobId: string): string {
    return `job id is: ${jobId}`;
  }

  createJob() {
    return uuid();
  }
}
