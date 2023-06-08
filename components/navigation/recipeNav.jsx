import Link from "next/link";
import React from "react";
import { ResponsiveH2 } from "../Utilities/ResponsiveText";

function RecipeNav({ recipes }) {
  const sortedRecipes = recipes.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <div className="grid justify-center gap-8 p-8 mx-auto bg-OM-tertiary rounded-xl">
        <h2 className="text-OM-secondary md:text-h4 text-h5">
          Follow my easy recipes from start to finish and you will end up a
          master chef in no time!
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 mx-auto md:gap-8">
          {sortedRecipes.map((recipe) => (
            <Link
              className="min-w-[300px] py-3 transition bg-blue-500 border-2 border-gray-500 rounded-lg bg-opacity-20 hover:scale-105 hover:border-OM-primary"
              href={`/recipe/${recipe.slug}`}
              key={recipe._id}
            >
              <p className="font-extrabold text-center text-transparent bg-gradient-to-r from-OM-primary via-OM-secondary to-OM-primary bg-clip-text text-md">
                {recipe.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default RecipeNav;
