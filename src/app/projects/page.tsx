import React from "react";
import { getData } from "@/utils/getData";
import { PROJECTSPAGE_QUERY } from "@/graphql/queries";
import BlockBuilder from "@/components/blockbuilder";

export default async function Projects() {
  const data = await getData({ query: PROJECTSPAGE_QUERY, revalidate: 60 });

  return (
    <main className="w-full mt-16 ">
      <BlockBuilder content={data?.projectPage?.content} />
    </main>
  );
}
