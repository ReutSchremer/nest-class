import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { TeacherService } from './teacher.service';

@Controller('/teacher')
export class TeacherController {

    constructor(
        private readonly teacherService: TeacherService,
    ) {
    }

    @Get()
    getClasses() {
        return this.teacherService.getAllClasses()
    }

    @Post('newTeacher')
    createNewTeacher(@Body('name') teacherName) {
        return this.teacherService.createNewClass(teacherName);
    }

    @Get('map')
    mapFunc() {
        this.teacherService.mapStudentsToClass()
        return this.teacherService.getAllClasses()
    }


}
