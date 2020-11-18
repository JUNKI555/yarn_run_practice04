declare module "umbrella" {
  interface umbrellaElement<T extends HTMLElement> extends T  {
    addClass(val: string): void;
    length: number;
  }

  interface umbrellaElementList<T extends HTMLCollection> extends T {
    nodes: Array;
  }

  function u<T extends HTMLElement>(val: string):umbrellaElement<T>;

  function u<T extends HTMLCollection>(val: string):umbrellaElementList<T>;

  export default u;
}
