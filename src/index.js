// import Person from "./export1.js";
import { square as sqr } from "./export2";
let appRoot = document.getElementById("app");
// let newPerson = new Person();

appRoot.textContent = `${sqr(23)}`;
