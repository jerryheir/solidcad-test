import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(25)
  firstname: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(25)
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(50)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  message: string;
}
