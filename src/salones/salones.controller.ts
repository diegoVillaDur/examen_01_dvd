import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Salon } from './models/salon';
import { CreateSalonDto } from './dto/create-salon.dto';
import { SalonesService } from './salones.service';

@Controller('salones')
export class SalonesController {

    constructor(private salonService: SalonesService) { }

    @Get()
    get(): Salon[] {
        return this.salonService.getAllSalones();
    }

    @Get(':id')
    getById(id: number): Salon {
        return this.salonService.getSalonById(id);
    }

    @Post()
    create(@Body() nuevoSalon: CreateSalonDto): Salon {
        return this.salonService.createSalon(nuevoSalon);
    }


    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        this.salonService.deleteSalon(id);
        return {
            success: true,
            message: `Salón ${id} eliminado de la lista`
        };
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() salonActualizado: CreateSalonDto): Salon {
        return this.salonService.updateSalon(id, salonActualizado);
    }
}
