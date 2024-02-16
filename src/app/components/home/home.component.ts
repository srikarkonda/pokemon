import { Component } from '@angular/core';
import { CommonService, Pokemon, Type2 } from '../../services/common.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../platform/dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  selectedPokemon!: Pokemon;
constructor(public commonService:CommonService,public dialog: MatDialog)
{
  this.commonService.getPokemons().subscribe(results=>{
    console.log(results)
    results.forEach((ele:Type2) => {
      this.commonService.getPokemonData(ele.url).subscribe((re:any) => {
        this.commonService.data.push(re)
      })
    });
    console.log(this.commonService.data)
    this.commonService.pokemons.next(this.commonService.data)
  })
}


  openDialog(pokemon:Pokemon): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {name: pokemon.name,url: pokemon.sprites.front_default},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result && result?.name === pokemon.name)
      {
        this.selectedPokemon = pokemon
      }
    });
  }

}
