import { ApiParam, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
export class CreateMovieDto {
    /**
     * Commercial title of the movie
     * @example Avengers: Endgame
     * @nullable false
     * @required true
     */
    @IsNotEmpty()
    @IsString()
    title: string;
    /**
     * Movie overview
     * @example The Avengers join forces to fight Thanos, after the villain eliminates half of the living beings in the galaxy.
     * @nullable false
     * @required true
     */
    @IsNotEmpty()
    @IsString()
    overview: string;
    /**
     * Movie release date
     * @example 2019-04-25
     * @nullable false
     * @required true
     */
    @IsNotEmpty()
    @IsDateString()
    release_date: Date;
    /**
     * indicates whether the movie is for over 18
     * @example false
     * @default false
     * @nullable false
     * @required true
     */
    @IsOptional()
    @IsBoolean()
    is_adult: boolean;
}
export class UpdateMovieDto {
    /**
     * Commercial title of the movie
     * @example Avengers: Endgame
     * @nullable true
     * @required false
     */
    @IsOptional()
    @IsString()
    title?: string;
    /**
     * Movie overview
     * @example Updated movies overview.
     * @nullable true
     * @required false
     */
    @IsOptional()
    @IsString()
    overview?: string;
    /**
     * Movie release date
     * @example 2019-04-25
     * @nullable true
     * @required false
     */
    @IsOptional()
    @IsDateString()
    release_date?: Date;
    /**
     * indicates whether the movie is for over 18
     * @example true
     * @nullable true
     * @required false
     */
    @IsOptional()
    @IsBoolean()
    is_adult?: boolean;
}
export class FindMovieIdDto {
    @IsNotEmpty()
    @IsUUID()
    id: string;
}
