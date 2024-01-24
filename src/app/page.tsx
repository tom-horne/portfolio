import { getData } from "@/utils/getData";
import { HOME_QUERY } from "@/graphql/queries";
import BlockBuilder from "@/components/blockbuilder";

export default async function Home() {
  const data = await getData({ query: HOME_QUERY, revalidate: 60 });

  return (
    <main className="w-full mt-20">
      <BlockBuilder content={data?.home?.content} />
    </main>
  );
}
