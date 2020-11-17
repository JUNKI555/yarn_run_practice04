import { addBaz } from './baz'

window.onload = function () {
  const app = document.getElementById("foo") as HTMLParagraphElement;
  
  app.innerHTML ="Hello Typescript World! foo";
  addBaz(app);
};
