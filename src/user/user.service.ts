import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return new Array(12).fill(0);
  }

  getUserById(userId) {
    return `Get current user id is: ${userId}`;
  }

  createUser(data) {
    return JSON.stringify(data);
  }
}
