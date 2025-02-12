import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalDetails from "@/components/users/PersonalDetails";
import SubscriptionDetails from "@/components/users/SubscriptionDetails";

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
                <BreadcrumbLink href="/users">Users</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>User-Info</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <h1 className="h2 mt-2">User-Info</h1>

        <div className="mt-5">
          <div className="min-w-xl mx-auto">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 gap-3">
                <TabsTrigger
                  value="personal"
                  className="text-sm sm:text-base font-bold "
                >
                  Personal Details
                </TabsTrigger>
                <TabsTrigger
                  value="subscription"
                  className="text-sm sm:text-base font-bold "
                >
                  Subscription Details
                </TabsTrigger>
              </TabsList>
              <TabsContent value="personal">
                <PersonalDetails />
              </TabsContent>
              <TabsContent value="subscription">
                <SubscriptionDetails />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
