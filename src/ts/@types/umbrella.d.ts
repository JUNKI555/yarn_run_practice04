declare module "umbrella" {
  interface umbrellaElement<T extends HTMLElement> extends T  {
    length: number;

    first(): umbrellaElement<T>;
    addClass(val: string): umbrellaElement<T>;
    append(val: string): void;
    append(val: umbrellaElement<T>): umbrellaElement<T>;
    // GET attr:
    // name: the attribute that we want to get from the first matched element
    // Return: string: the value of the attribute 
    attr(name: string): string;
    // SET sttr:
    // name: the attribute that we want to set for all of the matched elements
    // value: what we want to set the attribute to. If it's not defined, then we get the name
    // Return: u: returns the same instance of Umbrella JS
    attr(name: string, value:string): umbrellaElement<T>;

    // Remove all child nodes of the matched elements.
    // Return: u: Returns an instance of Umbrella JS with the empty nodes.
    empty(): umbrellaElement<T>;

    // GET text: Retrieve the text content of matched elements
    // Return: string: the text content of the first matched element
    text(): string;

    // SET text: Set the text content of matched elements
    // html: the new text content that you want to set for all of the matched elements. To remove it, pass an empty string: ""
    // Return: u: returns the same instance of Umbrella JS
    text(html: string): umbrellaElement<T>;
  }

  interface umbrellaElementList<T extends HTMLCollection> extends T {
    nodes: Array;
  }

  function u<T extends HTMLElement>(val: string):umbrellaElement<T>;

  function u<T extends HTMLCollection>(val: string):umbrellaElementList<T>;

  export default u;
}
