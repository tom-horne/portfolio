import React from "react";
import { getData } from "@/utils/getData";
import { ABOUT_QUERY } from "@/graphql/queries";
import BlockBuilder from "@/components/blockbuilder";

export default async function About() {
  const data = await getData({ query: ABOUT_QUERY, revalidate: 60 });

  return (
    <main className="w-full mt-16 ">
      <BlockBuilder content={data?.about?.content} />
    </main>
  );
}
