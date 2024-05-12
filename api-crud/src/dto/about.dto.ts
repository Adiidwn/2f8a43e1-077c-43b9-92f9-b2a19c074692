import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AboutDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  id: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  position: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  phone_number: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;
}

export class updateDataDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  position: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  phone_number: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;
}
