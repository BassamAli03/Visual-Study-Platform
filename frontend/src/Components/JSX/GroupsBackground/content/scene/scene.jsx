import { Scene as SceneThree } from "three";
import Camera from "../class/camera";
import Lights from "../class/lights";
import Loader from "../class/loader";
import Background from "../class/background";
import Jupiter from "../class/models/jupiter";
import Alien from "../class/models/alien";

export default class CustomScene extends SceneThree {
  constructor(renderer) {
    super();
    this.initialize(renderer);
  }

  initialize(renderer) {
    if (this.initialized) return; // Prevent re-initialization

    this.loader = new Loader();
    this.camera = new Camera();
    this.lights = new Lights(this);
    this.background = new Background(this);

    // Load models
    this.alien = new Alien(this, this.loader);
    this.jupiter = new Jupiter(this, this.loader);

    this.initialized = true; // Set flag to true after initialization

    // Start the rendering loop
    this._update(renderer);
  }

  _update(renderer) {
    if (!this.disposed) {
      renderer.render(this, this.camera);
      requestAnimationFrame(() => this._update(renderer));
    }
  }

  // Ensure you properly dispose of resources and stop the rendering loop
  dispose() {
    this.disposed = true;
    // Additional cleanup code here
    this.children.forEach((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) child.material.dispose();
      if (child.texture) child.texture.dispose();
    });
  }
}
