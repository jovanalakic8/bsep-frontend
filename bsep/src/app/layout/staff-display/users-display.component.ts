import { Component } from '@angular/core';
import { UserProfile } from 'src/app/model/user-profile.model';
import { LayoutService } from '../layout.service';
import { forkJoin, zip } from 'rxjs';

@Component({
  selector: 'app-users-display',
  templateUrl: './users-display.component.html',
  styleUrls: ['./users-display.component.css'],
})
export class UsersDisplayComponent {
  admins: UserProfile[] = [];
  employees: UserProfile[] = [];
  adminsAndEmployees: UserProfile[] = [];

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.getEmployees().subscribe(
      (employees: UserProfile[]) => {
        this.employees = employees;

        this.getAdmins().subscribe(
          (admins: UserProfile[]) => {
            this.admins = admins;

            this.adminsAndEmployees = this.admins.concat(this.employees);
            console.log('adminsAndEmployees', this.adminsAndEmployees);
          },
          (error) => {
            console.error('Error fetching admins:', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  getEmployees() {
    return this.layoutService.getAllUsers('employee');
  }

  getAdmins() {
    return this.layoutService.getAllUsers('admin');
  }

  isAdmin(user: UserProfile): boolean {
    return this.admins.some((admin) => admin.id === user.id);
  }
}
