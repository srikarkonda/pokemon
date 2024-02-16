import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../services/common.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../platform/dialog/dialog.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  @Input() pokemon!: Pokemon
  @Output() selected = new EventEmitter();
  isActive = false
  
}
