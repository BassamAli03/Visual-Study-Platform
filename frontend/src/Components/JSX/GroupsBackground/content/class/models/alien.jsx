import { Group } from "three";

export default class Alien {
  constructor(scene, loader) {
    this.object = new Group();
    this.loader = loader;
    this.init(scene);
  }

  init(scene) {
    const self = this;
    this.loader.load("./alien.glb", function (gltf) {
      self.object = gltf.scene;
      self.position();
      scene.add(self.object);
    });
    this.update();
  }

  position() {
    if (window.innerWidth > 900) {
      const ratio = ((window.innerWidth - 900) * 8) / 460 + 14;
      this.object.translateX(40);
      this.object.translateY(0);
      this.object.translateZ(-50);
    } else {
      this.object.translateY(5.8);
      this.object.translateZ(-20);
    }
    this.object.scale.set(26, 26, 26);
  }

  update() {
    const self = this;
    function animate() {
      if (self.object) {
        // self.object.rotation.x += 0.04;

        self.object.rotation.y -= 0.003;
        // self.object.rotation.z += 0.04;
      }
      requestAnimationFrame(animate);
    }
    animate();
  }
}
