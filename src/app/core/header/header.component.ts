import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/services/auth/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  refreshAppData$: Observable<boolean>

  constructor(private userSVC: UserService) {}

  ngOnInit(): void {
    this.refreshAppData$ = this.userSVC.refreshAppData$();
  }
}
