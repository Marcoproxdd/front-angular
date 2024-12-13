import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../../core/services/api/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  loading: boolean = true;
  errorMessage: string | null = null;
  events: any[] = [];
  selectedEvent: any = null;
  selectedOdds: string | null = null;
  betAmount: number | null = null;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getEvents().subscribe({
      next: (data) => {
        if (data && Array.isArray(data)) {
          this.events = data;
        } else {
          this.errorMessage = 'Los datos no tienen el formato esperado';
        }
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar los eventos';
        console.error(err);
        this.loading = false;
      },
    });
  }

  selectOdds(event: any, oddsType: string): void {
    this.selectedEvent = event;
    this.selectedOdds = oddsType;
  }

  placeBet(event: SubmitEvent): void {
    event.preventDefault();
    if (this.selectedEvent && this.selectedOdds && this.betAmount) {
      console.log('Apuesta realizada:', {
        eventId: this.selectedEvent.eventId,
        team: this.selectedOdds,
        amount: this.betAmount,
      });
      alert('Apuesta confirmada.');
    } else {
      alert('Por favor, completa todos los campos para realizar la apuesta.');
    }
  }
}
