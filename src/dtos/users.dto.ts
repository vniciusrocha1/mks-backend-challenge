import {
    IsDateString,
    IsEmail,
    IsEmpty,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    Length,
    MaxLength,
    MinLength,
} from 'class-validator';
export class UsersPOSTBodyDTO {
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    name: string;
    @IsNotEmpty()
    @IsString()
    @Length(11)
    cpf: string;
    @IsNotEmpty()
    @IsDateString()
    birthdate: Date;
    @IsNotEmpty()
    @IsString()
    @MinLength(11)
    @MaxLength(13)
    cellphone: string;
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(255)
    email: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;
}
export class UsersPATCHBodyDTO {
    @IsOptional()
    @IsString()
    @MaxLength(255)
    name: string;
    @IsOptional()
    @IsString()
    @Length(11)
    cpf: string;
    @IsOptional()
    @IsDateString()
    birthdate: Date;
    @IsOptional()
    @IsString()
    @MinLength(11)
    @MaxLength(13)
    cellphone: string;
    @IsEmpty()
    email: string;
    @IsOptional()
    @IsString()
    @MinLength(6)
    password: string;
}
export class UsersParamsDTO {
    @IsNotEmpty()
    @IsUUID()
    id: string;
}
