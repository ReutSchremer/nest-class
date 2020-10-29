import { Test, TestingModule } from '@nestjs/testing';
import { Teacher } from './teacher';

describe('Teacher', () => {
  let provider: Teacher;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Teacher],
    }).compile();

    provider = module.get<Teacher>(Teacher);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
