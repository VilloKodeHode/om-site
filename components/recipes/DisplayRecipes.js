import ResponsiveH1, {
  ResponsiveH2,
  ResponsiveP,
} from "@/components/Utilities/ResponsiveText";
import { PortableText } from "@portabletext/react";
import NormalButton from "../base components/Buttons";
import Link from "next/link";

export default function DisplayRecipes({ recipes }) {
  return (
    <div className="grid gap-8">
      {recipes.map((recipe) => (
        <div
          key={recipe._id}
          className="grid gap-8 p-8 bg-red-100 border-2 border-gray-700 rounded-lg"
        >
          <ResponsiveH1 className="">{recipe.title}</ResponsiveH1>
          <ResponsiveP className="">{recipe.description}</ResponsiveP>
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

          <Link
            className="p-1 transition border-2 border-gray-500 rounded-lg w-fit hover:scale-105 hover:border-blue-500"
            href={`/recipes/${recipe.slug}`}
            key={recipe._id}
          >
            {recipe.title}
          </Link>

          <PortableText value={recipe.content} />
        </div>
      ))}
    </div>
  );
}

