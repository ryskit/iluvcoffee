import { PartialType } from '@nestjs/swagger'
import { IsString } from 'class-validator'
import { CreateCoffeeDto } from './create-coffee.dto'

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
