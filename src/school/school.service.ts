import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, LessThan, Repository } from 'typeorm';
import { School } from './school.entity';

@Injectable()
export class SchoolService {
    constructor(
        @InjectRepository(School)
        private readonly schoolRepo: Repository<School>
    ) {
        console.log("creating schools")

        let p = this.schoolRepo.create({ name: "my school", code: 94573, capsules: [{ name: "capN" }] })
        // this.schoolRepo.save(p).then(res => console.log('res:', res)).catch(err => console.log('err:', err));
    }

    createSchool(school: Partial<School>): Promise<School> {
        return this.schoolRepo.save(school);
    }

    findAllSchools() {
        return this.schoolRepo.find();
    }

    find50To100() {
        return this.schoolRepo.find({ where: { studentsCount: Between(50, 100) } });
    }

    findWereIdLt5() {
        return this.schoolRepo.find({ where: { id: LessThan(5) } })
    }

    schoolAndCapsule() {
        this.schoolRepo.find({ relations: ['capsules'] }).then(res => {
            // console.log('res:', res)
            res.forEach(school => console.log(school.capsules))
        })
    }

}
