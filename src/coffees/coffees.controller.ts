import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Res,
  SetMetadata,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { CoffeesService } from './coffees.service'
import { CreateCoffeeDto } from './dto/create-coffee.dto'
import { UpdateCoffeeDto } from './dto/update-coffee.dto'
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto'
import { Public } from 'src/common/decorators/public.decorator'
import { Protocol } from 'src/common/decorators/protocol.decorator'

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Public()
  @Get()
  async findAll(
    @Protocol('https') protocol: string,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    console.log('protocol: ', protocol)
    // const { limit, offset } = paginationQuery
    return this.coffeesService.findAll(paginationQuery)
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(id)
    return this.coffeesService.findOne('' + id)
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto)
    return this.coffeesService.create(createCoffeeDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.coffeesService.remove(id)
  }
}
