import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TitleComponent, CommonModule],
  template: `
    <app-title [title]="currentFramework()"/>
    <pre>{{ asSignal()| json}}</pre>
    <pre>{{ asProperty | json}}</pre>
  `,
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(()=>`Change detection - ${this.asSignal().name}`)

  public asSignal = signal({
    name:'Angular',
    release:'2016'
  })
  public asProperty = {
    name:'Angular',
    release:'2016'
  }

  constructor(){
    setTimeout(() => {
      this.asSignal.update(v=> {
        v.name = "React"
        return {...v}
      })
      this.asProperty.name='React'

    }, 3000);
  }
}
