import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod-details-page',
  templateUrl: './prod-details-page.component.html',
  styleUrls: ['./prod-details-page.component.scss']
})
export class ProdDetailsPageComponent implements OnInit {
  users = [
    {
      username: 'ABE',
      date: '2020-03-28',
      comment: 'I am very glad, it arrived in time and just the way I specified my order',
      star: 5
    },
    {
      username: 'Timonthy',
      date: '2020-04-20',
      comment: 'As described. Nice product',
      star: 5
    },
    {
      username: 'Shuaibu',
      date: '2020-03-28',
      comment: 'As specified',
      star: 2
    },
    {
      username: 'SAMSON',
      date: '2020-01-18',
      comment: 'It has easy internet connection, fairly nice product but poor battery, battery does not last longer!',
      star: 5
    },
    {
      username: 'SAMSON',
      date: '2020-01-18',
      comment: 'It has easy internet connection, fairly nice product but poor battery, battery does not last longer!',
      star: 1
    },
    {
      username: 'SAMSON',
      date: '2020-01-18',
      comment: '',
      star: 4
    },
    {
      username: 'SAMSON',
      date: '2020-01-18',
      comment: 'It has easy internet connection, fairly nice product but poor battery, battery does not last longer!',
      star: 3
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
