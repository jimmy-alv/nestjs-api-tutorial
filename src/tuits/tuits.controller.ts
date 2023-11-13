import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('tuits')
export class TuitsController {
  @Get()
  getTuits(@Query() filterQuery): string {
    const { searchTerm, orderBy } = filterQuery
    return `All ${searchTerm} tuits ordered by ${orderBy}`
  }

  @Get(':id')
  getTuit(@Param('id') id: string): string {
    return `Your tuit id is ${id}`
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  createTuit(@Body('message') message): string {
    return `Your tuit is ${message}`
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body() tuit): string{
    return `The tuit ${id} has been updated.`
  }

  @Delete(':id')
  deleteTuit(@Param('id') id: string): string{
    return `The tuit ${id} has been deleted.`
  }
}
