import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { FeatureCard } from './feature-card/feature-card.component'
import { BlogCard } from './blog-card/blog-card.component'
import { OutlineGrayButton } from './outline-gray-button/outline-gray-button.component'
import { FooterGray } from './footer-gray/footer-gray.component'
import { NextButton } from './next-button/next-button.component'
import { SecondaryButton } from './secondary-button/secondary-button.component'
import { PrimaryBlueButton } from './primary-blue-button/primary-blue-button.component'
import { ListItem } from './list-item/list-item.component'
import { OutlineBlackButton } from './outline-black-button/outline-black-button.component'
import { Header } from './header/header.component'
import { PrimaryPinkButton } from './primary-pink-button/primary-pink-button.component'
import { OutlineBlueButton } from './outline-blue-button/outline-blue-button.component'

@NgModule({
  declarations: [
    FeatureCard,
    BlogCard,
    OutlineGrayButton,
    FooterGray,
    NextButton,
    SecondaryButton,
    PrimaryBlueButton,
    ListItem,
    OutlineBlackButton,
    Header,
    PrimaryPinkButton,
    OutlineBlueButton,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    FeatureCard,
    BlogCard,
    OutlineGrayButton,
    FooterGray,
    NextButton,
    SecondaryButton,
    PrimaryBlueButton,
    ListItem,
    OutlineBlackButton,
    Header,
    PrimaryPinkButton,
    OutlineBlueButton,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
