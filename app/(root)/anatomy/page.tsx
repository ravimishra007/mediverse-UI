"use client";
import React, { useMemo, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Anatomy } from "@/types/module";
import { AnatomyData as initialAnatomy } from "@/data/anatomy";
import Filters from "@/components/AllFilters";
import { Frown, Plus } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnatomyCard from "@/components/module/AnatomyCard";
import { useRouter } from "next/navigation";

const sortOptions = [
  { value: "all", label: "Default" },
  { value: "views", label: "Views" },
];

const Page = () => {
  const [modules, setModules] = useState<Anatomy[]>(initialAnatomy);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("all");
    const route = useRouter()


  const handleDelete = (id: string) => {
    setModules(modules.filter((module) => module.id !== (id)));
  };
  const handleAddAnatomy = () => {
    route.push(`/anatomy/addAnatomy`);
  };


  const filteredModules = useMemo(() => {
    return modules
      .filter(
        (module) =>
          module.title.toLowerCase().includes(search.toLowerCase()) &&
          (selectedCategory === "all" || module.category === selectedCategory)
      )
      .sort((a, b) => {
        if (sortBy === "views") return Number(b.views) - Number(a.views); 
        return 0;
      });
  }, [modules, search, selectedCategory, sortBy]);

  const categories = ["all", ...new Set(modules.map((m) => m.category))];

  return (
    <>
      <section className="h-auto   p-7">
        <div className="">
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>3D Anatomy</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>


           <SectionHeader
          title="3D Anatomy"
          buttonText="Add Anatomy"
          onButtonClick={handleAddAnatomy}
          icon={<Plus />}
          className="mb-4" 
        />

          <div className=" h-12 mt-4">
            <div className="min-w-xl mx-auto">
              <div className="mb-8 space-y-4">
                <Filters
                  search={search}
                  setSearch={setSearch}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  categories={categories}
                  sortOptions={sortOptions}
                />
              </div>
              <div>
                <h3 className="text-[#742193] font-semibold  "> All 3D Anatomy</h3>
             {filteredModules.length === 0 ? (
              <>
              <div className="flex justify-center items-center gap-2">
              <Frown className="darkText"/>
              <p className="text-gray-500 text-center">
                 No modules match your search criteria.
              </p>
              </div>
              </>
             
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
                  {/* lg:grid-cols-3 */}
                  {filteredModules.map((card) => (
                    <AnatomyCard
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    views={card.views}
                    imageUrl={card.imageUrl}
                    description={card.description}
                    category={card.category}
                    isVisible
                    onDelete={handleDelete}
                  />
                  ))}
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
