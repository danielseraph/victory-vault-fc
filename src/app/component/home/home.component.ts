import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

       players = [1, 2, 3, 4, 5, 6];

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
}
