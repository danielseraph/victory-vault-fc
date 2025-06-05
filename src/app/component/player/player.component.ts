import { Component, Input } from '@angular/core';
import { Player } from '../../interface/player';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-player',
  imports: [CommonModule, RouterModule,RouterLink],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
   @Input() player!: Player;

   getStatValue(stat: string): number | undefined {
  return this.player?.stats?.[stat as keyof typeof this.player.stats];
}
}
