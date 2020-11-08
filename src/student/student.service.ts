import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { TeacherService } from 'src/teacher/teacher.service';

@Injectable()
export class StudentService {

    constructor(
        @Inject(forwardRef(() => TeacherService))
        protected readonly teachrService: TeacherService
    ) {
        console.log("creating student service ")
    }

    students: Student[] = [
        {
            "age": 22,
            "name": "Ayala",
            "classId": 1,
            "id": 1
        }
    ]
    studentsIdCounter = 2;


    getAllStudents(): Array<Student> {
        return this.students;
    }

    createStudent(student: Partial<Student>): Student {
        student.id = this.studentsIdCounter;
        this.studentsIdCounter++;
        this.students.push(student as Student);
        return student as Student;
    }




}

export class Student {
    id: number
    name: string
    age: number
    classId: number
}