import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

       players = [
        {image: '/Micha.jpg', name: 'Kilete Micah', position: 'Midfielder', age: 25},
        {image: '/Jasper.jpg', name: 'Ebe Jasper', position: 'Striker', age: 27},
        {image: '/Stanley.jpg', name: 'Obiene Stanley', position: 'Stiker', age: 24},
        {image: '/Talent.jpg', name: 'Obiene Talent', position: 'Forward', age: 28},
       ];

     videos = [
    {
      title: 'Match Highlights: Victory Vault vs Amangala FC',
      thumbnail: '/Victory_vault_fc vs Amangala_fc.mp4',
      timeAgo: '31-03-2025'
    },
    {
      title: 'Top Goals of the Week',
      thumbnail: '/Wining_Goal.mp4',
      timeAgo: '1 day ago'
    },
    {
      title: 'Behind the Scenes Training',
      thumbnail: '/Training.mp4',
      timeAgo: '3 days ago'
    }
  ];

  playVideo(videoElement: HTMLVideoElement) {
    // Pause all other videos if needed
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach((vid) => {
      if (vid !== videoElement) vid.pause();
    });

    // Play selected video
    videoElement.play();
  }
   products = [
    {image: '/club jess.jpg', name: 'Home Jersey 24/25', price: '£75', category: 'JERSEYS'},
    {image: '/club jess1.jpg', name: 'Away Jersey 24/25', price: '£75', category: 'JERSEYS'},
  ];

  socialMedia = [
    { platform: 'Instagram', followers: '16.2K',icon:'pi pi-instagram', handle: '@victoryvault', link:'https://www.instagram.com/victory_vaultfc?igsh=Z284cXp5ejl3MGtk'},
    { platform: 'X', followers: '20.1K',icon:'pi pi-twitter', handle: '@VictoryVault' },
    { platform: 'Facebook', followers: '40.2K',icon:'pi pi-facebook', handle: 'Victory Vault', link:'https://www.facebook.com/share/1HYXxxWiQ9/?mibextid=wwXIfr' },
    { platform: 'YouTube', followers: '4.8K',icon: 'pi pi-youtube', handle: 'Victory Vault' },
  ];
}
