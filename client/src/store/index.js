import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#efbd48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./ARRT.png",
  fullDecal: "./threejs.png",
});

export default state;
