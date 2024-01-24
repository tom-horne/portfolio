import React from "react";
import { getData } from "@/utils/getData";
import BlockBuilder from "@/components/blockbuilder";
import { UNIVERSITY_QUERY } from "@/graphql/queries";

export default async function University() {
  const data = await getData({ query: UNIVERSITY_QUERY, revalidate: 60 });

  return (
    <main className="w-full mt-16 ">
      <BlockBuilder content={data?.university?.content} />
    </main>
  );
}
