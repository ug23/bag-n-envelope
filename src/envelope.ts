class Document {
  constructor() {
    this.name = "document in envelope";
    this.text = "too important contract...";
    this.signers = ["John Doe", "Jane Doe"];
  }
  name: string;
  text: string;
  signers: string[];
}

export default class Envelope {
  constructor() {
    this.document = new Document();
  }

  document: Document;
}
