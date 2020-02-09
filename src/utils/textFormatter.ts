import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

const richTextFormatter = (richTextDocument: Document) =>
  documentToReactComponents(richTextDocument);

export { richTextFormatter };
