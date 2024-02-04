import React from "react";
import { getData } from "@/utils/getData";
import { UNIVERSITYYEAR_QUERY } from "@/graphql/queries";
import BlockBuilder from "@/components/blockbuilder";

export default async function UniYear({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const data = await getData({
    query: UNIVERSITYYEAR_QUERY,
    variables: { slug: `university/${slug}` },
    revalidate: 60,
  });

  return (
    <main className="mt-16">
      {/* {slug} */}
      <BlockBuilder content={data?.universityYear?.content} />
    </main>
  );
}
