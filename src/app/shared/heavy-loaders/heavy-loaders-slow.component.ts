import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<h1>Hola SLOW</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoadersComponent {

  constructor() {

    const start = Date.now();
    while( Date.now() - start < 3000 ) {} //relentizamos la carga de cada pagina

    console.log('Cargado');
  }

}
