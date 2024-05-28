import { Component } from '@angular/core';
import {  RouterOutlet, RouterLink, RouterLinkActive, Router} from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink , RouterOutlet , RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAddNewFaceSnap() {
    this.router.navigateByUrl('/create');
  }

}
