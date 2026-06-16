import { type SchemaTypeDefinition } from "sanity";
import { appSchema } from "./app";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [appSchema],
};
