import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common'

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll(@Res() response) {
    // response.status(200).send('This action returns all coffees')
    return 'This action returns all coffees'
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`
  }

  @Post()
  create(@Body() body) {
    return body
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee`
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This action deletes #${id} coffee`
  }
}
