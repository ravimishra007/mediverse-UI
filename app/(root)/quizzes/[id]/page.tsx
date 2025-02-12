import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import QuizEditForm from "@/components/quiz/EditForm";

export default async function Page({params,}: {params: Promise<{ id: string }>;}) {
  const id = (await params).id;

  console.log("id", id);

  return (
    <>
      <section className="bg-[#f9f9f9] p-7">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/quizzes">Quizzes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Circulatory System Disease 1</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mt-5">
          <div className="min-w-xl mx-auto">
          <QuizEditForm/>
          </div>
        </div>
      </section>
    </>
  );
}
