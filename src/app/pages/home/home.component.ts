import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  raw26s9: string = ' '
  rawl5w4: string = ' '
  raw4z5y: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ptcg.tech')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ptcg.tech',
      },
    ])
  }
}
