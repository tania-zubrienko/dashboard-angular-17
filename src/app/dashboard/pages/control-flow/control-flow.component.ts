import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

type Grade = 'A'|'B'|'C'|'D'

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})

export default class ControlFlowComponent {

ifValue = signal(false)
grade = signal<Grade>('C')
frameworks = signal(['Angular', 'Vue', 'Quick', 'React'])
frameworks2 = signal([])



toggleIf(){
  this.ifValue.update(value => !value)
}
switchValue(){
  this.grade() === 'A' ? this.grade.update(v=> 'B') : this.grade.update(v=>'A')
}

}
