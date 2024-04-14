import { Group } from 'three';

export default class Venus {
    constructor(scene, loader) {
        this.object = new Group();
        this.loader = loader;
        this.init(scene);
    }

    init(scene) {
        const self = this;
        this.loader.load("./venus.glb", function (gltf) {
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
            this.object.translateY(0);
            this.object.translateX(0.9);
        } else {
            this.object.translateZ(38.5);
            this.object.translateY(1.8);
            this.object.translateX(0.4);
        }
        this.object.scale.set(2,2,2);
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
