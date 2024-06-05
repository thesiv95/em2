import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository, LessThan, And } from 'typeorm';
import { User } from './entity/user.entity';
import generateUserList from '../utils/generateUserList';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async checkUsers(step = 20) {
    let totalLength = 0;
    let firstUserIndex = 0;
    let lastUserIndex = 0;

    // get all records length
    const totalRecords = await this.userRepository.count();

    // one chunk in one loop iteration
    for (let i = 1; i <= totalRecords; i += step) {
      lastUserIndex += step;

      // find truthy
      const users = await this.userRepository.find({
        where: {
          id: And(MoreThanOrEqual(firstUserIndex), LessThan(lastUserIndex)),
        },
      });

      const usersWithProblemsLength = users.filter(
        (user) => user.hasIssues,
      ).length;

      totalLength += usersWithProblemsLength;
      // set to false
      await this.userRepository.update(
        {
          id: And(MoreThanOrEqual(firstUserIndex), LessThan(lastUserIndex)),
        },
        {
          hasIssues: false,
        },
      );

      // set last step value as first
      firstUserIndex = lastUserIndex;
    }

    return totalLength;
  }

  async generateUsers() {
    const userList = generateUserList();

    return this.userRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(userList)
      .execute();
  }
}
