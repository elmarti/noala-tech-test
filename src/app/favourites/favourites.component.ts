import { Component, OnInit } from '@angular/core'
import { FavouritesService } from '../favourites.service'
import { faHouse, faBone } from '@fortawesome/free-solid-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { Image } from '../images'

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  image: Image | undefined
  faHouse = faHouse
  fasHeart = fasHeart
  faBone = faBone
  favouriteImages = this.favouritesService.getFavouriteImages()

  constructor(private favouritesService: FavouritesService) {}

  // removing god from localStorage
  removeFavouriteDog(favouriteDog: Image) {
    // console.log(favouriteDog)
    localStorage.removeItem('favouriteDog')
  }
  ngOnInit(): void {}
}
