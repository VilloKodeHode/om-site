import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client.config";

export default async function getRecipes() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "recipe"] {
    _id,
    _createdAt,
    title,
    description,
    ingredients,
    instructions,
    "slug": slug.current,
    content,
  }`
  );
}
