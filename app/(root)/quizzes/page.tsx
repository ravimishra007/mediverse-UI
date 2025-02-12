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
import { Quiz } from "@/types/module";
import { dummyQuizzes as initialQuiz } from "@/data/quizzes";
import Filters from "@/components/AllFilters";
import { Frown, Plus } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useRouter } from "next/navigation";
import QuizCard from "@/components/quiz/QuizCard";

const sortOptions = [
  { value: "all", label: "Default" },
  { value: "questions", label: "Questions" },
  { value: "duration", label: "Duration" },
  { value: "attempts", label: "Attempts" },
];

const Page = () => {
  const [modules, setModules] = useState<Quiz[]>(initialQuiz);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("all");
  const route = useRouter();
  const [activeTab, setActiveTab] = useState<"published" | "pending">(
    "published"
  );

  const handleDelete = (id: string) => {
    setModules(modules.filter((module) => module.id !== id));
  };
  const handleAddQuizzes = () => {
    route.push(`/quizzes/addQuizzes`);
  };

  const filteredModules = useMemo(() => {
    return modules
      .filter(
        (module) =>
          module.title.toLowerCase().includes(search.toLowerCase()) &&
          (selectedCategory === "all" || module.category === selectedCategory)
      )
      .sort((a, b) => {
        if (sortBy === "questions") return b.questions - a.questions;
        if (sortBy === "attempts") return b.attempts - a.attempts;
        if (sortBy === "duration") {
          // Extract numbers from duration string and compare
          const durationA = parseInt(a.duration.replace(/\D/g, ""), 10);
          const durationB = parseInt(b.duration.replace(/\D/g, ""), 10);
          return durationB - durationA;
        }
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
                  <BreadcrumbPage>Quizzes</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <SectionHeader
            title=" Quizzes"
            buttonText="Add Quizzes"
            onButtonClick={handleAddQuizzes}
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

              <div className="flex justify-between items-center  mb-5 border-b  border-[#a7a6a6]">
                <div className="w-[40%]">
                  <div className="flex flex-row justify-evenly gap-10 ">
                    <button
                      className={`font-bold text-center w-[50%] p-1 ${
                        activeTab === "published"
                          ? "border-b-2 border-[#742193] text-[#742193]"
                          : "text-black"
                      }`}
                      onClick={() => setActiveTab("published")}
                    >
                      Published
                    </button>

                    <button
                      className={`font-bold text-center w-[50%] p-1 ${
                        activeTab === "pending"
                          ? "border-b-2 border-[#742193] text-[#742193]"
                          : "text-black"
                      }`}
                      onClick={() => setActiveTab("pending")}
                    >
                      Pending
                    </button>
                  </div>
                </div>
              </div>

              <div className="">
                <h3 className="text-[#742193] font-semibold mb-4 ">
                  {" "}
                  All Quizzes
                </h3>
                {filteredModules.length === 0 ? (
                  <div className="flex justify-center items-center gap-2">
                    <Frown className="darkText" />
                    <p className="text-gray-500 text-center">
                      No modules match your search criteria.
                    </p>
                  </div>
                ) : activeTab === "published" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* lg:grid-cols-3 */}
                    {filteredModules.map((card) => (
                      <QuizCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        questions={card.questions}
                        duration={card.duration}
                        imageUrl={card.imageUrl}
                        attempts={card.attempts}
                        category={card.category}
                        onDelete={handleDelete}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* lg:grid-cols-3 */}
                    {filteredModules.map((card) => (
                      <QuizCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        questions={card.questions}
                        duration={card.duration}
                        imageUrl={card.imageUrl}
                        attempts={card.attempts}
                        category={card.category}
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
