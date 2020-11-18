import { addBaz } from "./baz"
import u from "umbrella";

window.onload = function () {
  const app = document.getElementById("foo") as HTMLParagraphElement;
  
  app.innerHTML ="Hello Typescript World! foo";
  addBaz(app);

  u<HTMLParagraphElement>("#foo").addClass('main');
  console.log("#foo nodes:", u<HTMLParagraphElement>("#foo").length);
};
