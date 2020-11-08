import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { TeacherService } from 'src/teacher/teacher.service';

@Injectable()
export class ExtendedStudentService extends StudentService {
    constructor(@Inject(forwardRef(() => TeacherService))
    protected readonly teachrService: TeacherService) {
        super(teachrService)
    }

    newFunc() {
        console.log("helo");
    }

}
