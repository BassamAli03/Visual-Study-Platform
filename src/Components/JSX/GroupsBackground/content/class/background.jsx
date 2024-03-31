import { Mesh,SphereGeometry,TextureLoader, BackSide, MeshPhongMaterial, Geo } from "three";

export default class Background{
    constructor(scene){
        const Background = new SphereGeometry(90,25,25)
        const loader = new TextureLoader()
        const texture = loader.load('/back1.jpg');
        const material = new MeshPhongMaterial({
            map:texture,
        })

        const background = new Mesh(Background,material);
        background.material.side = BackSide;
        scene.add(background); 
    }
}