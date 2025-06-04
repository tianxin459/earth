import Globe from "globe.gl";

export const initGlobe = (el: HTMLElement) => {
    return new Globe(el, {})
        .pointOfView({ lat: 39.6, lng: -98.5, altitude: 2 })
        .showAtmosphere(true)
        .atmosphereAltitude(0.25);
};
