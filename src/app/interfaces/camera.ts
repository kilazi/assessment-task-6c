export interface Camera {
    name: string;
    distanceRange: [number, number];
    lightLevelRange: [number, number];
}

export interface CameraRequirement {
    distanceRange: [number, number];
    lightLevelRange: [number, number];
}