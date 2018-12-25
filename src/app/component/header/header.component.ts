import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public navigateTo(path) {
    if (path.index === 0) {
      this.router.navigate(['/']);
    } else if (path.index === 1) {
      this.router.navigate(['/result']);
    }
  }

}
