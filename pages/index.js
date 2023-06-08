import ResponsiveH1 from "@/components/Utilities/ResponsiveText";
import RecipeNav from "@/components/navigation/recipeNav";
import DisplayRecipes from "@/components/recipes/DisplayRecipes";
import getRecipes from "@/sanity-utils";

export default function Home({ recipes }) {
  return (
    <>
      <div className="grid justify-center gap-8">
        <ResponsiveH1 className="">Welcome to my foodblog!</ResponsiveH1>
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
