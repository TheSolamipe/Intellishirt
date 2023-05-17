import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#13b5e8",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./ARRT.png",
  fullDecal: "./threejs.png",
});

export default state;
