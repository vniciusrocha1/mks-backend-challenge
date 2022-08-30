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
export class CreateUserDto {
    /**
     * User full-name
     * @example "Example User da Silva"
     * @nullable false
     * @requires true
     */
    @IsNotEmpty()
    @IsString()
    @MaxLength(255)
    name: string;
    /**
     * User birthdate
     * @example 1998-10-23
     * @nullable false
     * @requires true
     */
    @IsNotEmpty()
    @IsDateString()
    birthdate: Date;
    /**
     * User cellphone, max 13 characters, only numbers
     * @example 5541992272301
     * @nullable false
     * @requires true
     */
    @IsNotEmpty()
    @IsString()
    @MinLength(11)
    @MaxLength(13)
    cellphone: string;
    /**
     * User CPF, 11 characters, numbers only
     * @example 02126512489
     * @nullable false
     * @uniqueItems true
     * @requires true
     */
    @IsNotEmpty()
    @IsString()
    @Length(11)
    cpf: string;
    /**
     * User email, used in login
     * @example "example.user.silva@examplemail.com"
     * @nullable false,
     * @uniqueItems true
     * @requires true
     */
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(255)
    email: string;
    /**
     * User login password
     * @example 0o1L2E
     * @nullable false
     * @requires true'
     */
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;
}
export class UpdateUserDto {
    /**
     * User full-name
     * @example "Updated example User da Silva"
     * @nullable true
     * @requires false
     */
    @IsOptional()
    @IsString()
    @MaxLength(255)
    name?: string;
    /**
     * User birthdate
     * @example 1998-10-23
     * @nullable true
     * @requires false
     */
    @IsOptional()
    @IsDateString()
    birthdate?: Date;
    /**
     * User cellphone, max 13 characters, only numbers
     * @example 5541992272301
     * @nullable true
     * @requires false
     */
    @IsOptional()
    @IsString()
    @MinLength(11)
    @MaxLength(13)
    cellphone?: string;
    /**
     * User CPF, 11 characters, numbers only
     * @example 02126512489
     * @nullable true
     * @uniqueItems true
     * @requires false
     */
    @IsOptional()
    @IsString()
    @Length(11)
    cpf?: string;
    /**
     * Cannot be updated - Send empty or remove from request body!
     * @nullable true
     * @ignore true
     * @example
     * @requires false
     */
    @IsEmpty()
    email?: string;
    /**
     * User login password
     * @example 0o1L2E
     * @readonly true
     * @requires false
     */
    @IsOptional()
    @IsString()
    @MinLength(6)
    password?: string;
}
export class FindUserIdDto {
    @IsNotEmpty()
    @IsUUID()
    id: string;
}
