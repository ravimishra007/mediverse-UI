"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import EditPlanForm from "@/components/plan&Billing/EditPlan";
const existingPlan = {
    name: "Premium Plan",
    monthlyPrice: "29.99",
    yearlyPrice: "299.99",
    details: [
      { id: 1, detail: "Access to premium features" },
      { id: 2, detail: "Priority customer support" },
      { id: 3, detail: "Unlimited storage" },
    ],
  };
const Page = () => {
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
              <BreadcrumbLink href="/plan-billing">Subscription</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Edit Plan</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="h2 mt-2">Edit Plan</h1>
      <div>
      <EditPlanForm initialData={existingPlan} />
      </div>
    </section>
  );
};

export default Page;
