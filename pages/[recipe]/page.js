import { getRecipe } from "@/sanity-utils";
import { PortableText } from "@portabletext/react";

export default function Page({ recipe }) {
  return (
    <div>
      <h1 className="font-extrabold text-transparent bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-7xl">
        {recipe.title}
      </h1>
      <div className="mt-10 text-lg text-gray-700">
        <PortableText value={recipe.content} />
      </div>
      <div className="grid gap-4">
        <ResponsiveH2 className="">Ingredients</ResponsiveH2>
        <div className="px-8 py-4 bg-gray-100 border border-gray-700 rounded-xl w-fit">
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li className="list-disc" key={ingredient}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid gap-4">
        <ResponsiveH2 className="">Instructions</ResponsiveH2>
        <div className="px-8 py-4 bg-gray-100 border border-gray-700 rounded-xl w-fit">
          <ul>
            {recipe.instructions.map((instruction) => (
              <li className="list-disc" key={instruction}>
                {instruction}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;
  console.log("Slug:", slug);
  const recipe = await getRecipe(slug);
  return {
    props: {
      recipe,
    },
  };
}
