import { randomUUID as uuid } from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getJob(jobId: string): string {
    return `job id is: ${jobId}`;
  }

  createJob() {
    return uuid();
  }
}
