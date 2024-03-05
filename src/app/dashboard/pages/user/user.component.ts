import { Component, computed, inject, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styles: ``
})
export default class UserComponent {

public userService = inject( UserService)
public router = inject(ActivatedRoute)


public user = toSignal(
  this.router.params.pipe(
    switchMap(({ id }) => this.userService.getUserById(id))
  )
);

public title = computed( ()=> `Additional info about ${this.user()?.first_name} ${this.user()?.last_name}`)

}
