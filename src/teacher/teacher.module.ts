import { forwardRef, Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { StudentService } from 'src/student/student.service';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
  imports: [forwardRef(() => StudentModule)],
  providers: [
    TeacherService,
  ],
  controllers: [TeacherController],
  exports: [TeacherService]
})
export class TeacherModule { }
