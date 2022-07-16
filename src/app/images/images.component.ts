import { Component, OnInit } from '@angular/core'
import { Image, Images } from '../images'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faCameraRetro,
  faPlus,
  faHeart as fasHeart,
  faDog,
  faVanShuttle,
  fas,
} from '@fortawesome/free-solid-svg-icons'
import { FavouritesService } from '../favourites.service'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { ImagesService } from '../images.service'
// import { url } from 'inspector'

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  images: Image[] = []
  allImages: Image[] = []
  loading = true
  fasHeart = fasHeart
  faHeart = faHeart
  faDog = faDog
  faCameraRetro = faCameraRetro
  faPlus = faPlus
  faGithub = faGithub
  faLinkedin = faLinkedin

  constructor(
    private favouritesService: FavouritesService,
    public imagesService: ImagesService,
  ) {}

  addToFavourites(image: Image) {
    // Exclude adding duplicates to Favourites
    const wasAdeded = this.favouritesService.addToFavourites(image)
    if (wasAdeded) {
      window.alert('Image added to your Favourites.')
      // replace regular heart icon with solid heart icon
      // const heart = document.getElementById('regular-heart')
      // const newElement = document.createElement('fa-icon')
      // newElement.innerHTML = '[icon]="fasHeart"'
      // heart.parentNode.replaceChild(newElement, heart);
    } else {
      window.alert('This image has already been added to your Favourites')
    }
  }

  reload() {
    this.imagesService.getImages().subscribe((data: any) => {
      this.images = data
      // console.log(this.images)
    })

    setTimeout(() => {
      this.loading = false
    }, 1000)
  }

  ngOnInit() {
    this.imagesService.getImages().subscribe((data: any) => {
      this.images = data
    })

    // Show a loading state to avoid a flash of empty content
    setTimeout(() => {
      this.loading = false
    }, 1000)
  }
}
