import { Group } from 'three';

export default class Sun {
    constructor(scene, loader) {
        this.object = new Group();
        this.loader = loader;
        this.init(scene);
    }

    init(scene) {
        const self = this;
        this.loader.load("./sun.glb", function (gltf) {
            self.object = gltf.scene;
            self.position();
            scene.add(self.object);
            this.update();
        });
        this.update();
    }

    position() {
        if (window.innerWidth > 900) {
            const ratio = ((window.innerWidth - 900) * 8) / 460 + 14;
            this.object.translateX(18);
            this.object.translateY(0);
            this.object.translateZ(-50);
        } else {
            this.object.translateY(5.8);
            this.object.translateZ(-20);
        }
        this.object.scale.set(16,16,16)
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
