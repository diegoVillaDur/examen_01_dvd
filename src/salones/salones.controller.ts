import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Salon } from './models/salon';
import { CreateSalonDto } from './dto/create-salon.dto';
import { SalonesService } from './salones.service';

@Controller('salones')
export class SalonesController {

    constructor(private salonService: SalonesService) { }

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

    
}
