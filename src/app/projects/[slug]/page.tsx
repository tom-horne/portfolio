import React from "react";
import { getData } from "@/utils/getData";
import { PROJECT_QUERY } from "@/graphql/queries";
import BlockBuilder from "@/components/blockbuilder";

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const data = await getData({
    query: PROJECT_QUERY,
    variables: { slug: `projects/${slug}` },
  });

  return (
    <main className="mt-16">
      {/* {slug} */}
      <BlockBuilder content={data?.project?.content} />
    </main>
  );
}
