"use client";

import React, { useState, Suspense } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useRouter, useSearchParams } from "next/navigation";
import SingleModuleHeader from "@/components/module/SingleModuleHeader";
import { MessageSquareCode, Plus } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { cards } from "@/data/chapters";
import ChapterCard from "@/components/module/ChapterCard";
import AnatomyCard from "@/components/module/AnatomyCard";
import { AnatomyData } from "@/data/anatomy";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SingleModulePage />
    </Suspense>
  );
};

const SingleModulePage = () => {
  const [activeTab, setActiveTab] = useState<"chapters" | "anatomy">(
    "chapters"
  );

  const route = useRouter();
  const params = useSearchParams();
  const id = params.get("id");
  const name = params.get("name") || "Untitled Module";

  console.log("params", id, name);

  const handleAddChapter = () => {
    route.push(`/modules/addChapter?id=${id}&name=${name}`);
  };

  const handleFeedBack = () => {
    route.push(`/modules/feedBacks?id=${id}&name=${name}`);
  };

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
              <BreadcrumbPage>{name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <SingleModuleHeader
        title={name}
        buttonText="View Feedback"
        onButtonClick={handleFeedBack}
        icon={<MessageSquareCode className="darkText" />}
        className="mb-4"
      />

      <div className="flex justify-between items-center ">
        <div className="w-[40%]">
          <div className="flex flex-row justify-evenly gap-10 ">
            <button
              className={`font-bold text-center w-[50%] p-1 ${
                activeTab === "chapters"
                  ? "border-b-2 border-[#742193] text-[#742193]"
                  : "text-black"
              }`}
              onClick={() => setActiveTab("chapters")}
            >
              Chapters
            </button>

            <button
              className={`font-bold text-center w-[50%] p-1 ${
                activeTab === "anatomy"
                  ? "border-b-2 border-[#742193] text-[#742193]"
                  : "text-black"
              }`}
              onClick={() => setActiveTab("anatomy")}
            >
              3D Anatomy
            </button>
          </div>
        </div>
        <div>
          <SectionHeader
            buttonText="Add Chapter"
            onButtonClick={handleAddChapter}
            icon={<Plus />}
            className="mb-4"
          />
        </div>
      </div>

      {activeTab === "chapters" && (
        <div className="mt-4 grid grid-cols-1 gap-4">
          {cards.map((card) => (
            <ChapterCard
              key={card.id}
              id={card.id}
              title={card.title}
              views={card.views}
              imageSrc={card.imageSrc}
            />
          ))}
        </div>
      )}

      {activeTab === "anatomy" && (
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {AnatomyData.map((card) => (
            <AnatomyCard
              key={card.id}
              id={card.id}
              title={card.title}
              views={card.views}
              imageUrl={card.imageUrl}
              description={card.description}
              category={card.category}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Page;
