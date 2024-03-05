import { Component } from '@angular/core';
import { HeavyLoadersComponent } from '../../../shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [HeavyLoadersComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
  styles: ``
})
export default class DeferOptionsComponent {

}
