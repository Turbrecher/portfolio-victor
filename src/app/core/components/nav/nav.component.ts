import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {




  sobremi() {
    document.getElementById('sobremi')?.scrollIntoView({ behavior: "smooth", inline: "end" })
  }

  estudios() {
    document.getElementById('estudios')?.scrollIntoView({ behavior: "smooth" })
  }

  experiencia() {
    document.getElementById('experiencia')?.scrollIntoView({ behavior: "smooth" })
  }

  conocimientos() {
    document.getElementById('conocimientos')?.scrollIntoView({ behavior: "smooth" })
  }

  proyectos() {
    document.getElementById('proyectos')?.scrollIntoView({ behavior: "smooth" })
  }

}
