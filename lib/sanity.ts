import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});

export async function getLandingPageContent() {
  const query = `*[_type == "landingPage"][0]{
    heroTitle,
    heroSubtitle,
    feature1Title,
    feature2Title,
    feature3Title
  }`;

  return await client.fetch(query);
}
