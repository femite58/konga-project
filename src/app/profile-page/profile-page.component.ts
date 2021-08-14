import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  pageInfo = {pageTitle: 'Account Information',linkTitle: 'My Profile'};
  activeLink = 'account';
  constructor() { }

  ngOnInit(): void {
  }

}
