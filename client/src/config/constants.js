import {
  swatch,
  fileIcon,
  ai,
  logoShirt,
  stylishShirt,
  bot3d,
  color3d,
  file3d,
  download,
} from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: color3d,
  },
  {
    name: "filepicker",
    icon: file3d,
  },
  {
    name: "aipicker",
    icon: bot3d,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DownldTabs = [
  {
    name: "imgDownload",
    icon: download,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
