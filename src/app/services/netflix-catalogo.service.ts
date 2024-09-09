import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetflixCatalogoService {

  private videos: Movie[] = [];

  // Creamos un BehaviorSubject que almacenará la lista de videos y emitirá actualizaciones
  private $videoSubject: BehaviorSubject<Movie[]>;

  constructor() {
    this.$videoSubject = new BehaviorSubject(this.videos);
  }

  // Método que devuelve un Observable para que otros componentes se suscriban a los cambios
  public getVideos(): Observable<Movie[]> {
    return this.$videoSubject.asObservable();
  }

  addVideo(video: Movie): void {
    this.videos.push(video);
    // Emitimos la nueva lista de videos
    this.$videoSubject.next(this.videos);
  }

  removeVideo(id: number): void {
    this.videos = this.videos.filter((video) => video.id !== id);
    // Emitimos la nueva lista de videos
    this.$videoSubject.next(this.videos);
  }

  likeVideo(id: number): void {
    const video = this.videos.find((video) => video.id === id);
    if (video) {
      video.likes++;
      // Emitimos la nueva lista de videos
      this.$videoSubject.next(this.videos);
    }
  }

}
