import { forwardRef, Inject, Injectable, Optional } from '@nestjs/common';
import { Student, StudentService } from 'src/student/student.service';

export interface ClassDB { [key: number]: ClassType };


@Injectable()
export class TeacherService {
    private classes: ClassDB;
    constructor(
        @Inject(forwardRef(() => StudentService))
        private readonly studentsService: StudentService,

    ) {
        this.classes = {
            1: {
                teacherName: "Noam",
                students: []
            }
        }
    }

    ids_counter = 2;
    createNewClass(teacherName: string) {
        this.classes[this.ids_counter] =
        {
            teacherName,
            students: []
        }
        this.ids_counter++;
        return true;

    }

    getAllClasses(): ClassDB {
        return this.classes;
    }

    mapStudentsToClass() {
        const students = this.studentsService.getAllStudents();

        students.forEach(stud => {
            if (stud.classId in this.classes)
                if (!this.classes[stud.classId].students.find(item => item.id == stud.id))
                    this.classes[stud.classId].students.push(stud);
        })
    }

}

class ClassType {
    teacherName: string
    students: Student[]
}
