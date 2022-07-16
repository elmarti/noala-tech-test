import { getModuleFactory, Injectable } from '@angular/core'
import { Image } from './images'

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  constructor() {}

  addToFavourites(image: Image) {
    const storedDogs: Image[] = JSON.parse(localStorage.getItem('dogs') || '[]')
    const isInFavorites =
      storedDogs.find((dog) => {
        return dog.id === image.id
      }) != undefined

    if (!isInFavorites) {
      storedDogs.push(image)
      localStorage.setItem('dogs', JSON.stringify(storedDogs))
      console.log('added')
      return true
    } else {
      return false
    }
  }

  getFavouriteImages() {
    return JSON.parse(localStorage.getItem('dogs') || '[]')
  }

  clearFavourites() {
    localStorage.setItem('dogs', JSON.stringify('[]'))
  }
}
