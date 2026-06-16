import { client } from "./client";

export type SanityApp = {
  _id: string;
  name: string;
  description: string;
  icon: {
    asset: {
      _ref: string;
    };
  };
  tags?: string[];
  playstoreUrl?: string;
  appstoreUrl?: string;
  landingPageUrl?: string;
  order?: number;
};

const APP_QUERY = `*[_type == "app"] | order(order asc, _createdAt asc) {
  _id,
  name,
  description,
  icon,
  tags,
  playstoreUrl,
  appstoreUrl,
  landingPageUrl,
  order
}`;

export async function getApps(): Promise<SanityApp[]> {
  return client.fetch<SanityApp[]>(APP_QUERY, {}, { next: { revalidate: 60 } });
}
