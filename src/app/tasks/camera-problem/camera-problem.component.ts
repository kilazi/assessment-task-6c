import { Component } from '@angular/core';
import { CameraService } from '../../services/camera.service';
import { Camera, CameraRequirement } from '../../interfaces/camera';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-camera-problem',
  standalone: true,
  imports: [FormsModule, CommonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButton],
  templateUrl: './camera-problem.component.html',
  styleUrl: './camera-problem.component.scss'
})
export class CameraProblemComponent {

  // TODO: Get requirements from user input, API or parsed .csv

  // TODO -- add form validators so the range FROM cannot be bigger than TO etc
  requirements: CameraRequirement = {
    distanceRange: [0, 3],
    lightLevelRange: [1, 2]
  };

  // TODO: get list of cameras from user input, API or parser csv
  cameras: Camera[] = [
    { name: 'Panasonic ULTRA 9000', distanceRange: [0, 10], lightLevelRange: [1, 5] },
    { name: 'James Bond spy camera', distanceRange: [5, 15], lightLevelRange: [3, 8] },
    { name: 'Eagle Eye X300', distanceRange: [2, 12], lightLevelRange: [2, 6] },
    { name: 'Hawk Vision Pro', distanceRange: [1, 8], lightLevelRange: [3, 7] },
    { name: 'Stealth Cam Ultra', distanceRange: [0, 5], lightLevelRange: [1, 4] },
    { name: 'Night Owl Elite', distanceRange: [3, 15], lightLevelRange: [4, 9] },
    { name: 'Panther Vision Xtreme', distanceRange: [4, 10], lightLevelRange: [2, 7] },
    { name: 'Falcon View Max', distanceRange: [1, 9], lightLevelRange: [3, 5] },
    { name: 'Shadow Seeker 2000', distanceRange: [5, 20], lightLevelRange: [5, 10] },
    { name: 'Lynx Tracker HD', distanceRange: [2, 14], lightLevelRange: [2, 6] },
    { name: 'Phoenix LightPro', distanceRange: [0, 6], lightLevelRange: [1, 5] },
    { name: 'Raven SpyMaster', distanceRange: [3, 12], lightLevelRange: [4, 8] }
  ]

  suitableCameras: Camera[];



  constructor(private cameraService: CameraService) { }



  findCameras(requirements: CameraRequirement, cameras: Camera[]): Camera[] {

    return this.cameraService.findSuitableCameras(requirements, cameras);

  }

  ngOnInit() {
    this.suitableCameras = this.findCameras(this.requirements, this.cameras);
  }

  getCameras() {
    this.suitableCameras = this.findCameras(this.requirements, this.cameras);
    console.log('getCameraas', this.suitableCameras);
  }

}
