import { WebGL1Renderer } from "three";
import Scene from "./scene/scene";

export default class Renderer extends WebGL1Renderer {
  constructor() {
    super({
      antialias: true,
      canvas: document.getElementById("content"),
    });
    this.configure();
    new Scene(this);
  }

  configure() {
    this.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.setSize(window.innerWidth, window.innerHeight);
      this.renderScene();
    }, 200);
  }

  renderScene() {
    
  }
}
