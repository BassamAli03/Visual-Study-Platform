import { Group } from "three";

export default class Jupiter {
  constructor(scene, loader) {
    this.object = new Group();
    this.loader = loader;
    this.init(scene);
  }

  init(scene) {
    const self = this;
    this.loader.load("./jupiter.glb", function (gltf) {
      self.object = gltf.scene;
      self.position();
      scene.add(self.object);
    });
    this.update();
  }

  position() {
    if (window.innerWidth > 900) {
      const ratio = ((window.innerWidth - 900) * -1) / 460 + 0.4;
      this.object.translateZ(41);
      this.object.translateY(0.2);
      this.object.translateX(2.9);
    } else {
      this.object.translateZ(38.5);
      this.object.translateY(1.8);
      this.object.translateX(0.4);
    }
    this.object.scale.set(2.6, 2.6, 2.6);
  }

  update() {
    const self = this;
    function animate() {
      if (self.object) {
        // self.object.rotation.x += 0.001;

        self.object.rotation.y += 0.003;
        // self.object.rotation.z += 0.04;
      }
      requestAnimationFrame(animate);
    }
    animate();
  }
}
