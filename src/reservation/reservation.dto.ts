import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { Reservation } from './reservation.entity';

class CreateReservationDto {
  @IsNotEmpty({ message: 'Start date cannot be empty' })
  start: Date;

  @IsNotEmpty({ message: 'End date cannot be empty' })
  end: Date;

  @IsString()
  comment: string;

  @IsNotEmpty()
  @IsUUID()
  spotId: string;

  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsUUID()
  modifiedBy: string;

  @IsOptional()
  currentReservations: Reservation[];
}

class CreateReservationsDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateReservationDto)
  reservations: CreateReservationDto[];
}

export { CreateReservationDto, CreateReservationsDto };
