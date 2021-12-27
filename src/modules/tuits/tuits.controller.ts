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

import { CreateTuitDto, UpdateTuitDto } from './dto';
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
  getTuit(@Param('id') id: number): Tuit {

    return this.tuitService.getTuit(id);
  }
  @Post()
  postTuit(@Body() message: CreateTuitDto): void {
    return this.tuitService.createTuit(message);
  }
  @Patch(':id')
  updateTuit(@Param('id') id: number, @Body() tuit: UpdateTuitDto): Tuit {
    return this.tuitService.updateTuit(id, tuit);
  }
  @Delete(':id')
  removeTuit(@Param('id') id: number): void {
    return this.tuitService.removeTuit(id);
  }
}
