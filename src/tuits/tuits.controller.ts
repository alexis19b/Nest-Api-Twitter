import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('tuits')
export class TuitsController {
  @Get()
  getTuits(): string {
    return 'Hello from tuitter';
  }
  @Get(':id')
  getTuit(@Param('id') id: string): string {
    return `Your tuit id is ${id}`;
  }
  @Post()
  postTuit(@Body('message') message: string): string {
    return `Your tuit is ${message}`;
  }
  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body() tuit): string {
    return `Youir tuit ${id} has been updated`;
  }
  @Delete(':id')
  deleteTuit(@Param('id') id: string): string {
    return `Youir tuit ${id} has been delete`;
  }
}
