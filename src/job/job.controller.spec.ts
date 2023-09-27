import { Test, TestingModule } from '@nestjs/testing';
import { JobController } from './job.controller';
import { JobService } from './job.service';

describe('JobController', () => {
  let appController: JobController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [JobController],
      providers: [JobService],
    }).compile();

    appController = app.get<JobController>(JobController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getJobById).toBeDefined();
    });
  });
});
