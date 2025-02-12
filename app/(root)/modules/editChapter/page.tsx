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
import EditChapterForm from "@/components/module/EditChapter";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditChapterPage />
    </Suspense>
  );
};

const existingChapter = {
    moduleName: "Respiratory System Overview",
    category: "Respiratory System",
    chapterTitle: "Lung Anatomy",
    photo: null,  // Assume no photo initially
    notes: null,  // Assume no notes initially
    modelId: "model1",
  };
// Separate Component for using useSearchParams
const EditChapterPage = () => {
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
              <BreadcrumbPage>Edit Chapter</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="h2 mt-2">Edit Chapter</h1>
      <div>
      <EditChapterForm initialData={existingChapter} />
      </div>
    </section>
  );
};

export default Page;
