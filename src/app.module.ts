import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalonesModule } from './salones/salones.module';

@Module({
  imports: [SalonesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
