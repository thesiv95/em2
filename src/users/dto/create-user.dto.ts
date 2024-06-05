import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
  MinLength,
} from 'class-validator';
import { GenderType } from 'src/enums';

export class CreateUserDto {
  @IsString()
  @MinLength(3, { message: 'First name must have at least 3 characters.' })
  @IsNotEmpty()
  name: string;

  @IsString()
  @MinLength(3, { message: 'Last name must have at least 3 characters.' })
  @IsNotEmpty()
  lastName: string;

  @IsInt()
  @Min(18, { message: 'Adults only!' })
  age: number;

  @IsString()
  @IsEnum(Object.values(GenderType))
  gender: string;

  @IsBoolean()
  hasIssues: boolean;
}
