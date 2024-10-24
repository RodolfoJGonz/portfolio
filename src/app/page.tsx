import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="w-screen h-screen">
          <div className="inline-flex w-screen h-14 bg-red-400 ">
            <div className="content px-10">
              <a className="" href="">Home</a>
              <a className="" href="">Not Home</a>
              <a className="" href="">Def Not Home</a>
            </div>
          </div>
        </div>
      </div>
    </HydrateClient>
  );
}
