import { Group } from "three";

export default class Mercury {
  constructor(scene, loader) {
    this.object = new Group();
    this.loader = loader;
    this.init(scene);
  }

  init(scene) {
    const self = this;
    this.loader.load("./mercury.glb", function (gltf) {
      self.object = gltf.scene;
      self.position();
      scene.add(self.object);
    });
    this.update();
  }

  position() {
    this.object.translateX(-240);
    this.object.translateY(-1);
    this.object.translateZ(-30);
    this.object.scale.set(13,13,13)
  }

  update() {
    const self = this;
    function animate() {
      if (self.object) self.object.rotation.y += 0.001;
      requestAnimationFrame(animate);
    }
    animate();
  }
}
