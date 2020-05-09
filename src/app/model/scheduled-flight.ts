import { Schedule } from './schedule';
import { Flight } from './flight';

export class ScheduledFlight {
    scheduleFlightId: number;
    flight: Flight;
    availableSeats: number;
    schedule: Schedule;
}
