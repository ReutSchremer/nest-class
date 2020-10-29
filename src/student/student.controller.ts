import { Body, Controller, Get, Post } from '@nestjs/common';
import { agent } from 'supertest';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(
        private readonly studentService: StudentService
    ) { }

    @Get('/')
    getStudent() {
        return this.studentService.getAllStudents();
    }

    @Post('new')
    createNewStudent(@Body('name') name, @Body('age') age, @Body('classId') classId) {
        if (!name || !age || !classId)
            throw "Didnt get all detais";
        return this.studentService.createStudent({ age, name, classId })
    }



}
