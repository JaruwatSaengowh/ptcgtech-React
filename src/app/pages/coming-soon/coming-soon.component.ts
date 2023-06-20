import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'coming-soon',
  templateUrl: 'coming-soon.component.html',
  styleUrls: ['coming-soon.component.css'],
})
export class ComingSoon {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ComingSoon - ptcg.tech')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ComingSoon - ptcg.tech',
      },
    ])
  }
}
