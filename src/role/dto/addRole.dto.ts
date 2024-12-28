import { IsNotEmpty, IsString } from 'class-validator';

export class AddRoleDTO {
  @IsString()
  @IsNotEmpty()
  name;

  @IsString()
  @IsNotEmpty()
  creatorName;
}
