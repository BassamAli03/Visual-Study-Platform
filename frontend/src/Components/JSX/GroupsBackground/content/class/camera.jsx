import { PerspectiveCamera } from "three";

export default class CustomCamera extends PerspectiveCamera {
    constructor() {
        super(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.container = document.getElementById("container");
        if (this.container) {
            this.container.onscroll = this.cameraMoves.bind(this);
            this.cameraMoves();
        }
        this.position.z = 6;
    }

    cameraMoves() {
        if (!this.container) return;
        
        const scrollTop = this.container.scrollTop;
        const scrollHeight = this.container.scrollHeight;
        const offsetHeight = this.container.offsetHeight;

        const pot = (scrollTop * 100) / (scrollHeight - offsetHeight);

        this.position.x = pot * 0.025;
        this.rotation.y = pot * 0.025;
        this.position.z = pot * 0.35;
    }
}
