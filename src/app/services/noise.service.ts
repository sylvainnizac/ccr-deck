import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoiseService {

  t_noise: number = 0

  ambiant_noise = new BehaviorSubject(0)

  constructor() { }

  updateBaseNoise(value: number) {
    this.t_noise += value

    if (this.t_noise < 0) {
      this.t_noise = 0
    }

    this.ambiant_noise.next(this.t_noise)
  }

}
