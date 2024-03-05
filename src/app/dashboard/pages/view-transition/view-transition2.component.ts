import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent],
  template:`
  <app-title title="View transitions"/>

  <section class="flex justify-end">
    <img srcset="https://picsum.photos/id/237/200/300"
    alt="Picsum"
    width="200"
    height="300"
    style='view-transition-name: hero'/>
    <div class="bg-purple-500 w-20 h-20" style='view-transition-name: hero2'></div>
  </section>

  `,
  styles: ``
})
export default class ViewTransitionComponent {

}
