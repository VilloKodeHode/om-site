import {
  Paragraph,
  SectionTitleHeader,
} from "@/components/Utilities/ResponsiveText";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export default function DisplayRecipes({ recipes }) {
  return (
    <div className="grid justify-center grid-cols-1 gap-12 mx-auto xl:grid-cols-3 md:grid-cols-2">
      {recipes.map((recipe) => (
        <>
          <div
            key={recipe._id}
            className={`relative grid min-h-[400px] max-w-md gap-8 p-8 border-2 border-gray-700 rounded-b-xl bg-cover bg-center`}
            style={{ backgroundImage: `url(${recipe.image})` }}
          >
            <Link
              className="z-10 px-2 py-4 transition bg-white border-2 border-gray-500 rounded-lg h-fit backdrop-blur-lg bg-opacity-90 hover:scale-105 hover:border-OM-primary"
              href={`/recipe/${recipe.slug}`}
            >
              <SectionTitleHeader
                heading="h2"
                className="z-10 font-extrabold text-center text-transparent bg-gradient-to-r from-OM-primary via-OM-secondary to-OM-tertiary bg-clip-text"
              >
                {recipe.title}
              </SectionTitleHeader>
            </Link>
            <div className="z-10 px-2 py-1 mx-auto border-2 border-gray-500 rounded-lg bg-OM-tertiary backdrop-blur-lg bg-opacity-30 w-fit h-fit">
              <PortableText value={recipe.content} />
            </div>
            <div className="z-10 mx-auto max-w-[300px] px-2 py-1 border-2 border-gray-500 rounded-lg h-fit bg-OM-tertiary backdrop-blur-lg bg-opacity-30 w-fit">
              <Paragraph>{recipe.description}</Paragraph>
            </div>
            <div className="absolute w-full h-full bg-white rounded-b-xl bg-opacity-80" />
          </div>
        </>
      ))}
    </div>
  );
}
