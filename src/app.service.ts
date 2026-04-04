import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Mahir!.Welcome to nestjs project.you run succesfully';
  }
}
