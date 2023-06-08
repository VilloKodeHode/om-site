import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client.config";

export default async function getRecipes() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "recipe"] {
    _id,
    _createdAt,
    title,
    description,
    "image": image.asset->url,
    "slug": slug.current,
    content,
  }`
  );
}

export async function getServerSideProps() {
  const recipes = await getRecipes();
  return {
    props: {
      recipes,
    },
  };
}

export async function getRecipe(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "recipe" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    description,
    ingredients,
    instructions,
    "slug": slug.current,
    "image": image.asset->url,
    alt,
    content,
  }`,
    { slug }
  );
}

export async function getLinks() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "recipe"] {
    _id,
    title,
    "slug": slug.current,
    
  }`
  );
}