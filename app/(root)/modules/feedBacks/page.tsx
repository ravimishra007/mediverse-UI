"use client";

import React, { Suspense } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useSearchParams } from "next/navigation";
import FeedbackList from "@/components/module/feedback/FeedbackList";
import { Star } from "lucide-react";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeedBackPage />
    </Suspense>
  );
};

const FeedBackPage = () => {
  const params = useSearchParams();
  const id = params.get("id");
  const name = params.get("name") || "Untitled Module";

  return (
    <section className="bg-[#f9f9f9] h-50 p-7">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/modules">Module</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/modules/singleModule?id=${id}&name=${name}`}
              >
                {name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Feed-Back</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      <h1 className="h2 mt-2">Feedback</h1>
<div className="mt-4 space-y-1">
    <p className="text-lg text-gray-500">Modules Details :</p>
    <h2 className="text-lg font-bold">Module Name : <span className="text-lg font-semibold ml-2">{name}</span></h2>
    <h2 className="text-lg font-bold  flex flex-row  ">Overall Rating : <span className="text-lg font-semibold flex items-center gap-1 ml-2">4.5 <Star  className="w-4 h-4 fill-amber-400 text-amber-400"
            aria-hidden="true"/></span></h2>

</div>
      <div>
        <FeedbackList />
      </div>
    </section>
  );
};

export default Page;
