import { proxy } from "valtio";
const state = proxy({
    intro: true,
    color: '#00897B',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './nobg.svg',
    fullDecal: './logo.png',
});
export default state;