import {Scene as SceneThree } from "three";
import Camera from "../class/camera";
import Lights from "../class/lights";
import Loader from "../class/loader";
// import Sun from "../class/models/sun";
import Background from "../class/background";
// import Venus from "../class/models/venus";
import Neptune from "../class/models/neptune";
import Jupiter from "../class/models/jupiter";

export default class CustomScene extends SceneThree {
  constructor(renderer) {
    super();
    const loader = new Loader();
    this._camera = new Camera();
    //new Sun(this,loader);

    new Neptune(this,loader);
    new Jupiter(this,loader);
    //new Venus(this,loader);
    new Background(this)
    new Lights(this);
    this._update(renderer);
  }

  _update(renderer) {
    renderer.render(this, this._camera);
    requestAnimationFrame(this._update.bind(this, renderer));
  }
}
