import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "rgb(60, 161, 161)",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./ARRT.png",
  fullDecal: "./threejs.png",
});

export default state;
