import { Test, TestingModule } from '@nestjs/testing';
import { ExtendedStudentService } from './extended-student.service';

describe('ExtendedStudentService', () => {
  let service: ExtendedStudentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtendedStudentService],
    }).compile();

    service = module.get<ExtendedStudentService>(ExtendedStudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
