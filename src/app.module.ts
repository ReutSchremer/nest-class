import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { SchoolModule } from './school/school.module';
import { School } from './school/school.entity';
import { CapsulesModule } from './capsules/capsules.module';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forRoot({
      username: "root",
      password: "z10mz10m",
      type: "mysql",
      database: "nest_class2",
      port: 3306,
      synchronize: true,
      logging: true,
      // entities: [School]
      entities: ["dist/**/*{.ts,.js}"]
    }),
    SchoolModule,
    CapsulesModule
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
