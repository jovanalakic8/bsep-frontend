import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../infrastructure/auth/auth.service';

@Component({
  selector: 'xp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isDropdownOpen = false;
  systemAdminEnabled = false;
  user: User | undefined;

  constructor(public router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  permissions(): void {
    this.router.navigate(['/permissions']);
  }

  logout(): void {
    this.authService.logout();
  }

  register(): void {
    this.router.navigate(['/register']);
  }

  registrationRequests(): void {
    this.router.navigate(['/registrationRequests']);
  }

  profile(): void {
    this.router.navigate(['/profile']);
  }

  staff(): void {
    this.router.navigate(['/staff']);
  }

  create(): void {
    this.router.navigate(['/createStaffMember']);
  }
  notifications(): void {
    this.router.navigate(['/notifications']);
  }
}
