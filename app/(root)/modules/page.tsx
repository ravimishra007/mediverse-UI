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
import { Module } from "@/types/module";
import { modules as initialModules } from "@/data/modules";
import ModuleCard from "@/components/ModuleCard";
import Filters from "@/components/AllFilters";
import { Frown, Plus } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useRouter } from "next/navigation";

const sortOptions = [
  { value: "all", label: "Default" },
  { value: "rating", label: "Rating" },
  { value: "chapters", label: "Chapters" },
];

const Page = () => {
  const [modules, setModules] = useState<Module[]>(initialModules);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("all");
  const handleDelete = (id: string) => {
    setModules(modules.filter((module) => module.id !== id));
  };
    const route = useRouter()
  

  const handleAddModule = () => {
    // console.log("Add Module button clicked!");
    // Add your logic here (e.g., open a modal or navigate to a form)
    route.push(`/modules/addModule`);

  };


  const filteredModules = useMemo(() => {
    return modules
      .filter(
        (module) =>
          module.title.toLowerCase().includes(search.toLowerCase()) &&
          (selectedCategory === "all" || module.category === selectedCategory)
      )
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "chapters") return b.chaptersCount - a.chaptersCount;
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
                  <BreadcrumbPage>Modules</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>


           <SectionHeader
          title="Modules"
          buttonText="Add Module"
          onButtonClick={handleAddModule}
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
                <h3 className="text-[#742193] font-semibold  "> All Modules</h3>
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
                  {filteredModules.map((module) => (
                    <ModuleCard
                      key={module.id}
                      module={module}
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
