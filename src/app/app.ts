import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header, Footer } from 'shared/ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Assignment for Angular';
}
