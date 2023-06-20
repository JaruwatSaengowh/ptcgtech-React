import { Component, Input } from '@angular/core'

@Component({
  selector: 'footer-gray',
  templateUrl: 'footer-gray.component.html',
  styleUrls: ['footer-gray.component.css'],
})
export class FooterGray {
  @Input()
  rootClassName: string = ''
  rawi76a: string = ' '
  constructor() {}
}
