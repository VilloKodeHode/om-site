import Link from "next/link";
import React from "react";
import {
  Paragraph,
  ResponsiveH2,
  ResponsiveH3,
  ResponsiveHeader,
  SectionTitleHeader,
  StandardP,
  SubTitleHeader,
} from "../Utilities/ResponsiveText";

function RecipeNav({ recipes }) {
  const sortedRecipes = recipes.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <div className="grid justify-center gap-8 p-8 mx-auto bg-OM-tertiary rounded-xl">
        <SectionTitleHeader heading="h2" className="text-OM-secondary">
          Follow my easy recipes from start to finish and you will end up a
          master chef in no time!
        </SectionTitleHeader>
        <div className="flex flex-wrap items-center justify-center gap-4 mx-auto md:gap-8">
          {sortedRecipes.map((recipe) => (
            <Link
              className="min-w-[300px] py-3 transition bg-blue-500 border-2 border-gray-500 rounded-lg bg-opacity-20 hover:scale-105 hover:border-OM-primary"
              href={`/recipe/${recipe.slug}`}
              key={recipe._id + "nav"}
            >
              <Paragraph className="font-bold text-center text-transparent bg-gradient-to-r from-OM-primary via-OM-secondary to-OM-primary bg-clip-text">
                {recipe.title}
              </Paragraph>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default RecipeNav;
