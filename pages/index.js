import TitleHeader from "@/components/Utilities/ResponsiveText";
import RecipeNav from "@/components/navigation/recipeNav";
import DisplayRecipes from "@/components/recipes/DisplayRecipes";
import getRecipes from "@/sanity-utils";
import Head from "next/head";

export default function Home({ recipes }) {
  return (
    <>
      <Head>
        <title>Olas Matlaging</title>
        <meta
          name="description"
          content="Mockup foodblog made with next+sanity"
        />
        <meta
          name="keywords"
          content="sanity, next, foodblog, mockup, recipe, recipes, food, cooking, baking, kitchen, Villo utvikling"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="grid justify-center gap-8">
        <TitleHeader heading="h1">Welcome to my foodblog!</TitleHeader>
        <RecipeNav recipes={recipes} />
        <DisplayRecipes recipes={recipes} />
      </div>
    </>
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

// const client = createClient({
//   projectId: "j94c7x4f",
//   dataset: "production",
// });

// export async function getStaticProps() {
//   const recipes = await client.fetch(groq`*[_type == "recipe"] {
//     _id,
//     _createdAt,
//     title,
//     description,
//     ingredients,
//     instructions,
//     "slug": slug.current,
//     content,
//   }`);

//   return {
//     props: {
//       recipes,
//     },
//   };
// }
