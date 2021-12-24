import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';

import { Tuit } from './tuit.entity';
import { TuitsService } from './tuits.service';

@Controller('tuits')
export class TuitsController {

  constructor(private readonly tuitService: TuitsService) { }

  @Get()
  getTuits(@Query() filterQuery): Tuit[] {
    const { searchTerm, OrderBy } = filterQuery;
    return this.tuitService.getTuits();
  }
  @Get(':id')
  getTuit(@Param('id') id: string): Tuit {

    return this.tuitService.getTuit(id);
  }
  @Post()
  postTuit(@Body('message') message: string): any {
    return this.tuitService.createTuit(message);
  }
  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body('message') tuit): Tuit {
    return this.tuitService.updateTuit(id, tuit);
  }
  @Delete(':id')
  removeTuit(@Param('id') id: string): any {
    return this.tuitService.removeTuit(id);
  }
}
