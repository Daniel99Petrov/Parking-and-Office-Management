import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';
import { IsUnique } from 'src/utils/decorators/unique/unique.decorator';

export class CreateSpotDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 64)
  @IsUnique({ tableName: 'spot', column: 'name' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 256)
  description: string;

  @IsNotEmpty()
  top: number;

  @IsNotEmpty()
  left: number;

  @IsUUID()
  @IsNotEmpty()
  spotTypeId: string;

  @IsUUID()
  @IsNotEmpty()
  floorPlanId: string;

  @IsUUID()
  @IsNotEmpty()
  modifiedBy: string;
}
