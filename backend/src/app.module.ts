import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { HealthModule } from './modules/health/health.module.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { UsersModule } from './modules/users/users.module.js';
import { CustomersModule } from './modules/customers/customers.module.js';
import { BarbersModule } from './modules/barbers/barbers.module.js';
import { ServicesModule } from './modules/services/services.module.js';
import { AppointmentsModule } from './modules/appointments/appointments.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'backend',
    }),
    HealthModule,
    AuthModule,
    UsersModule,
    CustomersModule,
    BarbersModule,
    ServicesModule,
    AppointmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
