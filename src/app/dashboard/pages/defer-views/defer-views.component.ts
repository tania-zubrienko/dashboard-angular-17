import { Component } from '@angular/core';
import { HeavyLoadersComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow.component';

@Component({
  standalone: true,
  imports: [HeavyLoadersComponent],
  templateUrl: './defer-views.component.html',
  styles: ``
})
export default class DeferViewsComponent {

}
