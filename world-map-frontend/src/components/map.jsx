import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { debounce } from "lodash";
import { useHistory } from "react-router-dom";
import {
  myVertexShaderCoce,
  myFragmentShaderCoce,
  atmosphereVertexShaderCoce,
  atmosphereFragmentShaderCoce,
} from "../vertex_shaders/vertex_code";

const Map = () => {
  const mountRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const mountNode = mountRef.current;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const maptexture = require("../img/map.jpg");

    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(mountRef.devicePixelRatio);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader: myVertexShaderCoce(),
        fragmentShader: myFragmentShaderCoce(),
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load(maptexture),
          },
        },
      })
    );
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShaderCoce(),
        fragmentShader: atmosphereFragmentShaderCoce(),
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      })
    );
    atmosphere.scale.set(1.1, 1.1, 1.1);
    scene.add(atmosphere);
    scene.background = new THREE.Color(10325);

    const group = new THREE.Group();
    group.add(sphere);
    scene.add(group);

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starVertices.push(x, y, z);
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
    });
    const stars = new THREE.Points(starGeometry, starsMaterial);
    scene.add(stars);

    const smallSphereGeometry = new THREE.SphereGeometry(2, 32, 32);

    const smallSphereMaterial1 = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });
    const smallSphereMaterial2 = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });
    const smallSphereMaterial3 = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });
    const smallSphereMaterial4 = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });
    const smallSphereMaterial5 = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });
    const smallSphereMaterial6 = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });
    const smallSphereMaterial7 = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
    });
    const smallSphere1 = new THREE.Mesh(
      smallSphereGeometry,
      smallSphereMaterial1
    );
    const smallSphere2 = new THREE.Mesh(
      smallSphereGeometry,
      smallSphereMaterial2
    );
    const smallSphere3 = new THREE.Mesh(
      smallSphereGeometry,
      smallSphereMaterial3
    );
    const smallSphere4 = new THREE.Mesh(
      smallSphereGeometry,
      smallSphereMaterial4
    );
    const smallSphere5 = new THREE.Mesh(
      smallSphereGeometry,
      smallSphereMaterial5
    );

    const smallSphere6 = new THREE.Mesh(
      smallSphereGeometry,
      smallSphereMaterial6
    );

    const smallSphere7 = new THREE.Mesh(
      smallSphereGeometry,
      smallSphereMaterial7
    );

    smallSphere1.position.set(3, -1, 4);
    smallSphere1.scale.set(0.2, 0.2, 0.2);

    smallSphere2.position.set(5, 1, -1);
    smallSphere2.scale.set(0.2, 0.2, 0.2);

    smallSphere3.position.set(-1, 4, 3);
    smallSphere3.scale.set(0.2, 0.2, 0.2);

    smallSphere4.position.set(-3.5, -2, -3);
    smallSphere4.scale.set(0.2, 0.2, 0.2);

    smallSphere5.position.set(-1, 3, -4);
    smallSphere5.scale.set(0.2, 0.2, 0.2);

    smallSphere6.position.set(3, 4, -1);
    smallSphere6.scale.set(0.2, 0.2, 0.2);

    smallSphere7.position.set(0, -5, 0);
    smallSphere7.scale.set(0.2, 0.2, 0.2);

    let raycaster = new THREE.Raycaster();

    window.addEventListener("click", onMouseClick, false);

    function onMouseClick(event) {
      let mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const objtorecas = [
        smallSphere1,
        smallSphere2,
        smallSphere3,
        smallSphere4,
        smallSphere5,
        smallSphere6,
        smallSphere7,
      ];
      let intersects = raycaster.intersectObjects(objtorecas);
      for (let i = 0; i < intersects.length; i++) {
        if (intersects[i].object === smallSphere1) {
          history.push("/south-america-info");
        } else if (intersects[i].object === smallSphere2) {
          history.push("/africa-info");
        } else if (intersects[i].object === smallSphere3) {
          history.push("/north-america-info");
        } else if (intersects[i].object === smallSphere4) {
          history.push("/australia-info");
        } else if (intersects[i].object === smallSphere5) {
          history.push("/asia-info");
        } else if (intersects[i].object === smallSphere6) {
          history.push("/europe-info");
        } else if (intersects[i].object === smallSphere7) {
          history.push("/antarctica-info");
        }
      }
    }
    const onMouseMoveDebounced = debounce(onMouseMove, 50);

    function onMouseMove(event) {
      let mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const objtorecas = [
        smallSphere1,
        smallSphere2,
        smallSphere3,
        smallSphere4,
        smallSphere5,
        smallSphere6,
        smallSphere7,
      ];

      const intersects = raycaster.intersectObjects(objtorecas);
      const tets = () => {
        for (let i = 0; i < intersects.length; i++) {
          if (intersects[i].object === smallSphere1) {
            return smallSphere1;
          } else if (intersects[i].object === smallSphere2) {
            return smallSphere2;
          } else if (intersects[i].object === smallSphere3) {
            return smallSphere3;
          } else if (intersects[i].object === smallSphere4) {
            return smallSphere4;
          } else if (intersects[i].object === smallSphere5) {
            return smallSphere5;
          } else if (intersects[i].object === smallSphere6) {
            return smallSphere6;
          } else if (intersects[i].object === smallSphere7) {
            return smallSphere7;
          }
        }
      };

      const cursoronsphere = tets();

      if (cursoronsphere === smallSphere1) {
        smallSphereMaterial1.color.set(0x0000ff);
      } else if (cursoronsphere === smallSphere2) {
        smallSphereMaterial2.color.set(0x0000ff);
      } else if (cursoronsphere === smallSphere3) {
        smallSphereMaterial3.color.set(0x0000ff);
      } else if (cursoronsphere === smallSphere4) {
        smallSphereMaterial4.color.set(0x0000ff);
      } else if (cursoronsphere === smallSphere5) {
        smallSphereMaterial5.color.set(0x0000ff);
      } else if (cursoronsphere === smallSphere6) {
        smallSphereMaterial6.color.set(0x0000ff);
      } else if (cursoronsphere === smallSphere7) {
        smallSphereMaterial7.color.set(0x0000ff);
      } else {
        smallSphereMaterial1.color.set(0x00ff00);
        smallSphereMaterial2.color.set(0x00ff00);
        smallSphereMaterial3.color.set(0x00ff00);
        smallSphereMaterial4.color.set(0x00ff00);
        smallSphereMaterial5.color.set(0x00ff00);
        smallSphereMaterial6.color.set(0x00ff00);
        smallSphereMaterial7.color.set(0x00ff00);
      }
    }
    window.addEventListener("mousemove", onMouseMoveDebounced, false);

    sphere.add(smallSphere1);
    sphere.add(smallSphere2);
    sphere.add(smallSphere3);
    sphere.add(smallSphere4);
    sphere.add(smallSphere5);
    sphere.add(smallSphere6);
    sphere.add(smallSphere7);

    camera.position.z = 12;

    const mouse = {
      x: undefined,
      y: undefined,
    };

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      sphere.rotation.y += 0.0003;

      gsap.to(group.rotation, {
        x: -mouse.y * 3,
        y: mouse.x * 3,
        duration: 2,
      });
    };

    let isMouseDown = false;
    mountRef.current.addEventListener("mousedown", () => {
      isMouseDown = true;
    });
    mountRef.current.addEventListener("mouseup", () => {
      isMouseDown = false;
    });
    mountRef.current.addEventListener("mousemove", (event) => {
      if (isMouseDown) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = (event.clientY / window.innerHeight) * 2 - 1;
      }
    });
    mountRef.current.appendChild(renderer.domElement);
    animate();
    return () => {
      mountNode.removeChild(renderer.domElement);
    };
  }, [history]);

  return <div ref={mountRef} className="map-container"></div>;
};

export default Map;
