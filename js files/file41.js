// object destructuring

const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heacen",
  year: 1998,
  anotherFamouseSong: "kashmir",
};

// const bandName = band.bandName;
// const var1 = band.bandName;
// const famousSong = band.famousSong;

// console.log(bandName);

const { bandName: var1, famousSong: var2, ...restProps } = band;
console.log(var1);
console.log(restProps);
