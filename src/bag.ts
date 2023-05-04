class Document {
  constructor() {
    this.name = "document in bag";
    this.text = "too important content...";
    this.owner = "John Doe";
  }
  name: string;
  text: string;
  owner: string;
}

export default class Bag {
  constructor() {
    this.document = new Document();
  }

  document: Document;
}
