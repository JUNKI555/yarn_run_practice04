export function addBaz(p:HTMLParagraphElement):void {
  const baz = document.createElement("p");
  baz.textContent = "It is Baz.";

  p?.appendChild(baz);
}
