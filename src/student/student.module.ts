import { forwardRef, Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TeacherModule } from 'src/teacher/teacher.module';

@Module({
  imports: [forwardRef(() => TeacherModule)],
  providers: [StudentService],
  controllers: [StudentController],
  exports: [StudentService]
})
export class StudentModule { }
