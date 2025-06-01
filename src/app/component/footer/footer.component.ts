import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  clubLinks = [
    'News',
    'Fixtures & Results',
    'First Team',
    'Academy',
    'Victory Vault Women',
    'History',
    'Stadium',
  ];

  ticketsLinks = [
    'Buy Tickets',
    'Season Tickets',
    'Membership',
    'Hospitality',
    'Stadium Tours',
    'Accessibility',
  ];

  moreLinks = [
    'Shop',
    'Junior Eagles',
    'Victory Vault Women',
    'Foundation',
    'Supporters Clubs',
    'Contact Us',
  ];

  policyLinks = [
    'Privacy Policy',
    'Terms of Use',
    'Cookie Policy',
    'Accessibility',
  ];
}
