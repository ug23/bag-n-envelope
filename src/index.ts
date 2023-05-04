import { Bag } from "./bag";
import { Envelope } from "./envelope";

export class Main {
  bag: Bag = new Bag();
  envelope: Envelope = new Envelope();

  public openBag(): string[] {
    return [
      this.bag.document.name,
      this.bag.document.owner,
      this.bag.document.text,
    ];
  }

  public openEnvelope(): string[] {
    return [
      this.envelope.document.name,
      this.envelope.document.text,
      ...this.envelope.document.signers,
    ];
  }
}

const main: Main = new Main();

console.log(main.openBag());
console.log(main.openEnvelope());
