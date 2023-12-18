import { getData } from "@/utils/getData"
import { HOME_QUERY } from "@/graphql/queries"
import BlockBuilder from "@/components/blockbuilder";
export default async function Home() {

  const data = await getData({ query: HOME_QUERY });

  console.log('====================================');
  console.log(data.home.content);
  console.log('====================================');



  return (
    <main className="w-full mt-16 bg-slate-200 top-0 ">
      <div className="bg-blue-300 flex justify-center mx-auto max-w-[1366px] h-16">
        <h1>Welcome to my Portfolio!</h1>
      </div>
      {/* <Text title={data.home.content[0].title} text={data.home.content[0].text}/> */}
      <BlockBuilder content={data.home.content}/>
    </main>
  )
}
