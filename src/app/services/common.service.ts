import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  data: Pokemon[]=[];
  pokemons = new BehaviorSubject(this.data)
  constructor(private http: HttpClient) { 
    
  }

    getPokemons()
    {
      return this.http.get('https://pokeapi.co/api/v2/pokemon').pipe(map((ele:any)=> {return ele.results}));
    }

    getPokemonData(url:string)
    {
      return this.http.get(url);
    }
}

export interface Pokemon {
  
  height: number
  id: number
  name: string
  types: Type[]
  weight: number
  sprites: Sprites
}
export interface Type {
  slot: number
  type: Type2
}

export interface Sprites {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export interface Type2 {
  name: string
  url: string
}
