import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
})
export class Profile {
  rawql71: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Profile - ptcg.tech')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Profile - ptcg.tech',
      },
    ])
  }
}
