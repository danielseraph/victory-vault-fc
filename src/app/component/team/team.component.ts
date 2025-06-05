import { Component } from '@angular/core';
import { Player } from '../../interface/player';
import { Staff } from '../../interface/staffs';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-team',
  imports: [CommonModule, RouterModule,FormsModule,RouterLink],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

   players: Player[] = [
    {
      id: 1,
      name: 'Ebe Jasper',
      position: 'Striker',
      number: 9,
      age: 28,
      nationality: 'Nigeria',
      image: '/Jasper.jpg',
      stats: { appearances: 10, goals:30, assists:5},
    },
    {
      id: 2,
      name: 'David Rodriguez',
      position: 'Defender',
      number: 2,
      age: 26,
      nationality: 'Spain',
      image: '/placeholder.svg?height=300&width=250',
      stats: { appearances: 42, goals: 3, assists: 7 },
    },
    {
      id: 2,
      name: 'David Rodriguez',
      position: 'Defender',
      number: 2,
      age: 26,
      nationality: 'Spain',
      image: '/placeholder.svg?height=300&width=250',
      stats: { appearances: 42, goals: 3, assists: 7 },
    },
    {
      id: 2,
      name: 'David Rodriguez',
      position: 'Defender',
      number: 2,
      age: 26,
      nationality: 'Spain',
      image: '/placeholder.svg?height=300&width=250',
      stats: { appearances: 42, goals: 3, assists: 7 },
    },
    {
      id: 2,
      name: 'David Rodriguez',
      position: 'Defender',
      number: 2,
      age: 26,
      nationality: 'Spain',
      image: '/placeholder.svg?height=300&width=250',
      stats: { appearances: 42, goals: 3, assists: 7 },
    },
    // ... Add the remaining players here ...
  ];

  coachingStaff: Staff[] = [
    {
      id: 1,
      name: 'Antonio Fernandez',
      role: 'Head Coach',
      nationality: 'Spain',
      image: '/placeholder.svg?height=300&width=250',
      experience: '15 years',
    },
    {
      id: 2,
      name: 'Gary Mitchell',
      role: 'Assistant Coach',
      nationality: 'England',
      image: '/placeholder.svg?height=300&width=250',
      experience: '12 years',
    },
    {
      id: 3,
      name: 'Dr. Sarah Johnson',
      role: 'Head of Sports Science',
      nationality: 'England',
      image: '/placeholder.svg?height=300&width=250',
      experience: '8 years',
    },
  ];

  selectedPosition = 'All';
  searchTerm = '';
  activeTab: 'first-team' | 'coaching-staff' | 'academy' = 'first-team';

  positions = ['All', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward'];

  get filteredPlayers(): Player[] {
    return this.players.filter((player) => {
      const matchesPosition =
        this.selectedPosition === 'All' || player.position === this.selectedPosition;
      const matchesSearch = player.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesPosition && matchesSearch;
    });
  }

  setTab(tab: 'first-team' | 'coaching-staff' | 'academy') {
    this.activeTab = tab;
  }
   getPlayerById(id: number): Player | undefined {
    return this.players.find((p) => p.id === id);
  }
}
