import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { Images } from './images'

export class ImagesService {
  private readonly API = 'https://dog.ceo/api/breeds/image/random/5'
  constructor(private http: HttpClient) {}

  getImages() {
    return this.http.get<Images>(this.API).pipe(
      map((images, i) =>
        images.message.map((imageUrl, i) => ({
          id: i + 1,
          url: imageUrl,
          used: false,
        })),
      ),
    )
  }
}
