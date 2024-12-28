import { IsIn, IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddUserDTO {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsInt()
  roleId: number;
}
