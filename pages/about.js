import ResponsiveH1, {
  ResponsiveP,
} from "@/components/Utilities/ResponsiveText";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 mx-auto">
        <ResponsiveH1 className="text-center">About me</ResponsiveH1>
        <div className="transition border-8 rounded-b-full border-OM-tertiary bg-gradient-to-r from-OM-primary to-OM-secondary">
          <div className="border border-b-0 rounded-full border-OM-tertiary">
            <Image
              src="/images/Ola.png"
              width={400}
              height={400}
              alt="picture of Ola"
              className="rounded-full"
            />
          </div>
        </div>
        <ResponsiveP>
          Welcome to my about page, fellow food enthusiasts! I&apos;m Chef Ola,
          and let me take you on a culinary journey like no other. Buckle up,
          because my story is seasoned with extraordinary cooking feats,
          sprinkled with delicious ingredients, and garnished with a pinch of
          humor.
        </ResponsiveP>
        <ResponsiveP>
          Once upon a time, I set out on a quest to conquer the culinary world.
          I sautéed through Michelin-starred kitchens, danced with flaming pans,
          and tangoed with exotic spices. I was the fearless maestro of the
          culinary symphony, conducting flavors like a virtuoso. But as fate
          would have it, my culinary adventures took an unexpected turn. After
          dazzling the culinary scene with my gastronomic prowess, I found
          myself longing for a different kind of applause—the one that echoes
          through the cozy walls of a home kitchen. So, I bid adieu to the
          glittering limelight and embarked on a new chapter as the ultimate
          home chef extraordinaire.
        </ResponsiveP>
        <ResponsiveP>
          No longer wearing chef hats adorned with stars, I slipped into a comfy
          apron and embraced the warmth of domesticity. From flamboyant culinary
          creations to whipping up comfort food delights, I now work my magic in
          the heart of every home. Gone are the days of towering chef hats and
          white-knuckle stress; now, I delight in the symphony of sizzling pans,
          the aroma of freshly baked bread, and the harmonious laughter of loved
          ones gathered around the table. I may have traded the stage for the
          intimacy of a home kitchen, but my passion for food remains as fiery
          as ever.
        </ResponsiveP>
        <ResponsiveP>
          As a home chef, I bring the culinary world to your doorstep,
          transforming everyday ingredients into extraordinary culinary
          experiences. So, whether you&apos;re craving a perfectly seared steak
          or a divine chocolate soufflé, let me be your culinary companion.
          Together, we&apos;ll embark on a flavorful journey that will tantalize
          your taste buds and leave you with a belly full of joy and a smile
          that stretches from ear to ear. Join me, Chef Ola, as we celebrate the
          magic of home cooking, one delicious bite at a time. Together,
          we&apos;ll create culinary memories that will last a lifetime. Bon
          appétit and let the adventures begin!
        </ResponsiveP>
      </div>
    </>
  );
}
