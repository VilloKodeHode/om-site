import ResponsiveH1, {
  ResponsiveH2,
} from "@/components/Utilities/ResponsiveText";
import { getRecipe } from "@/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function Page({ recipe }) {
  return (
    <section className="grid gap-8">
      <ResponsiveH1 className="font-extrabold text-center text-transparent bg-gradient-to-r from-OM-primary via-OM-secondary to-OM-tertiary bg-clip-text text-md">
        {recipe.title}
      </ResponsiveH1>
      <div className="text-lg text-gray-700">
        <PortableText value={recipe.content} />
      </div>
      <div className="flex flex-col mx-auto md:flex-row md:rounded-r-xl md:min-w-[80%] md:rounded-t-none rounded-t-xl">
        <div className="p-8 md:w-1/2 bg-OM-secondary bg-opacity-30 md:rounded-bl-xl">
          <h2 className="mb-4 text-2xl font-bold">Ingredients</h2>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient) => (
              <li className="text-h5" key={ingredient}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2">
          <Image
            src={recipe.image}
            alt={recipe.alt}
            width={300}
            height={200}
            className="object-cover md:rounded-br-xl md:rounded-b-none rounded-b-xl"
          />
        </div>
      </div>
      <div className="flex mx-auto items-center justify-center md:rounded-r-xl md:min-w-[80%] md:rounded-t-none rounded-t-xl">
        <div className="p-8 md:w-1/2 bg-OM-secondary bg-opacity-30 rounded-b-xl">
          <h2 className="mb-4 text-2xl font-bold">Instructions</h2>
          <ol className="list-disc list-inside">
            {recipe.instructions.map((instruction) => (
              <li className="list-decimal text-h5" key={instruction}>
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// export async function getServerSideProps({ params }) {
//   const { slug } = params;
//   console.log("Slug:", slug);
//   const recipe = await getRecipe(slug);
//   return {
//     props: {
//       recipe,
//     },
//   };
// }

export async function getServerSideProps({ params }) {
  const { recipeId } = params;
  console.log("Recipe ID:", recipeId);
  const recipe = await getRecipe(recipeId);
  return {
    props: {
      recipe,
    },
  };
}
