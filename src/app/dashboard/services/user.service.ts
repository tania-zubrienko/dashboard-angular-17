import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal, computed } from '@angular/core';
import { ReqResponse, User, UserResponse } from '../../interfaces/req-res.interface';
import { map } from 'rxjs';

interface State {  users: User[], loading: boolean}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl:string = 'https://reqres.in/api/users'
  private http = inject( HttpClient)

  #state = signal<State>({ //pripiedad privada
    loading:true,
    users:[]
  })
  public currentState = computed( ()=> this.#state())

  constructor(){
    this.http.get<ReqResponse>(this.baseUrl)
      .subscribe(res=>this.#state.set({loading:false, users: res['data']}))
    }

  getUserById(id:string) {
    return this.http.get<UserResponse>(`${this.baseUrl}/${id}`).pipe(map(e=>e.data))
  }
}
