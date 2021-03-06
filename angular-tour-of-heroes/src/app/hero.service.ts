import { Injectable } from '@angular/core';
import { Hero } from '../app/heroes/hero';
import { Heroes } from '../app/heroes/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    return of(Heroes);
  }
}
