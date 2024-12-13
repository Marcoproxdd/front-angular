import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "src/app/shared/shared.module";
import { EventsComponent } from './components/events/events.component';
import { EventRoutingModule } from './event.routing.module';

@NgModule({
  declarations:[
    EventsComponent,
  ],
  imports: [CommonModule, SharedModule, EventRoutingModule],
})
export class EventsModule {}
