import TitleHeader, {
  SectionTitleHeader,
} from "@/components/Utilities/ResponsiveText";
import { getRecipe } from "@/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function Page({ recipe }) {
  return (
    <section className="grid gap-8">
      <TitleHeader
        heading="h1"
        className="font-extrabold text-center text-transparent bg-gradient-to-r from-OM-primary via-OM-secondary to-OM-tertiary bg-clip-text text-md"
      >
        {recipe.title}
      </TitleHeader>
      <div className="text-lg text-gray-700">
        <PortableText value={recipe.content} />
      </div>
      <div className="flex flex-col mx-auto md:flex-row md:rounded-r-xl md:min-w-[80%] md:rounded-t-none rounded-t-xl">
        <div className="grid p-8 md:w-1/2 bg-OM-secondary bg-opacity-30 md:rounded-bl-xl">
          <div>
            <SectionTitleHeader heading="h2" className="font-bold ">
              Ingredients
            </SectionTitleHeader>
            <ul className="list-disc list-inside">
              {recipe.ingredients.map((ingredient) => (
                <li className="text-p" key={ingredient}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitleHeader heading="h2" className="text-2xl font-bold">
              Tools
            </SectionTitleHeader>
            <ul className="list-disc list-inside">
              {recipe.tools.map((tool) => (
                <li className="text-p" key={tool}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
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
        <div className="p-8 bg-OM-secondary bg-opacity-30 rounded-b-xl">
          <SectionTitleHeader heading="h2" className="mb-4 text-2xl font-bold">
            Instructions
          </SectionTitleHeader>
          <ol className="list-disc list-inside">
            {recipe.instructions.map((instruction) => (
              <li className="list-decimal text-p" key={instruction}>
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

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
