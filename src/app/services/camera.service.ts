import { Injectable } from '@angular/core';
import { Camera, CameraRequirement } from '../interfaces/camera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  constructor() { }

  findSuitableCameras(requirements: CameraRequirement, cameras: Camera[]): Camera[] {

    return cameras.filter(camera => {
      const coversDistance = camera.distanceRange[0] <= requirements.distanceRange[0] && camera.distanceRange[1] >= requirements.distanceRange[1];
      const coversLightLevel = camera.lightLevelRange[0] <= requirements.lightLevelRange[0] && camera.lightLevelRange[1] >= requirements.lightLevelRange[1];
      return coversDistance && coversLightLevel;
    });

  }

}