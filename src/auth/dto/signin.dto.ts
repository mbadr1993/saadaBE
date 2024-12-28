import { IsNotEmpty, IsString } from 'class-validator';

export class SigninDTO {
  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
