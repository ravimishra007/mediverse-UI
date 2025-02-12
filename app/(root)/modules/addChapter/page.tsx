"use client"; // Make sure this is the first line

import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ChapterForm from "@/components/module/ChapterForm";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AddChapterPage />
    </Suspense>
  );
};

// Separate Component for using useSearchParams
const AddChapterPage = () => {
  const params = useSearchParams();
  const id = params.get("id");
  const name = params.get("name") || "Untitled Module";

  console.log("params", id, name);

  return (
    <section className="bg-[#f9f9f9] h-50 p-7">
      <div>
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
              <BreadcrumbLink href={`/modules/singleModule?id=${id}&name=${name}`}>
                {name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Add Chapter</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="h2 mt-2">Add Chapter</h1>
      <div>
        <ChapterForm />
      </div>
    </section>
  );
};

export default Page;
