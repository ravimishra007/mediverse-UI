import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import AdminDetails from "@/components/administrators/AdminDetails";

export default async function Page({params,}: {params: Promise<{ id: string }>;}) {
  const id = (await params).id;

  console.log("id", id);

  return (
    <>
      <section className="bg-[#f9f9f9] h-50 p-7">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/administrator">Administrator</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>Edit Administrator</BreadcrumbPage>
                {/* <BreadcrumbPage>View Profile</BreadcrumbPage> */}
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* <h1 className="h2 mt-2">My Profile</h1> */}
        <h1 className="h2 mt-2">Edit Administrator</h1>

        <div className="mt-5">
          <div className="min-w-xl mx-auto">
          <AdminDetails />

          </div>
        </div>
      </section>
    </>
  );
}
