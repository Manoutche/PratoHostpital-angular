import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './core/models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userObj: User = new User()

  showLogin(){
    const modal = document.getElementById('loginModal')
    if (modal != null) {
      modal.style.display = 'block'
    }
  }
  closLogin(){
    const modal = document.getElementById('loginModal')
    if (modal != null) {
      modal.style.display = 'none'
    }
  }
}
