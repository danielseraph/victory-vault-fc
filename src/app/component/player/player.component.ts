import { Component, Input } from '@angular/core';
import { Player } from '../../interface/player';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { Staff } from '../../interface/staffs';

@Component({
  selector: 'app-player',
  imports: [CommonModule, RouterModule,RouterLink],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  //  @Input() player!: Player;
 player: Player = {
    id: 1,
    name: 'Ebe Jasper',
    position: 'Striker',
    number: 9,
    age: 28,
    nationality: 'Nigeria',
    image: '/Jasper.jpg',
    bio: 'Ebe Jasper is a dynamic striker from Nigeria, Bayelsa state, Ogbia local government area, Opume community known for his finishing ability...',
    height: '6ft',
    weight: '75kg',
    contract: '2026-06-30',
    previousClubs: ['Rivers United', 'Enyimba FC'],
    stats: {
      appearances: 10,
      goals: 30,
      assists: 5,
      tackles: 7,
      passAccuracy: 82,
    }
  };

  // You can still have your list here if needed
  playerbio: Player[] = [/*...*/];
  coachingStaff: Staff[] = [/*...*/];

  getStatValue(stat: string): number | undefined {
    return this.player?.stats?.[stat as keyof typeof this.player.stats];
  }

  //  getStatValue(stat: string): number | undefined {
  // return this.player?.stats?.[stat as keyof typeof this.player.stats];
}
