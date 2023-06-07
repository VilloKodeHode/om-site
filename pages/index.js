import DisplayRecipes from "@/components/recipes/DisplayRecipes";
import getRecipes from "@/sanity-utils";

export default function Home({ recipes }) {
  return (
    <div className="grid gap-8">
      <h1 className="text-4xl font-bold">Home</h1>
      {/* <DisplayRecipes recipes={recipes} /> */}
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

            <PortableText value={recipe.content} />
          </div>
        ))}
      </div>
    </div>
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
