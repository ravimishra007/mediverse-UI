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
import { useRouter } from "next/navigation";
import {  Plus } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import PlanCard from "@/components/plan&Billing/PlanCard";
import CouponCard from "@/components/plan&Billing/CouponCard";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PlanBillingPage />
    </Suspense>
  );
};

const PlanBillingPage = () => {
  const [activeTab, setActiveTab] = useState<"plans" | "coupons">(
    "plans"
  );

  const route = useRouter();
  
  const handleAddCoupon = () => {
    route.push(`${activeTab === "plans" ? "/plan-billing/addPlan" : "/plan-billing/addCoupon"}`);
  };

  const handleEdit = () => {
    // alert("Edit functionality coming soon!");
        route.push(`${activeTab === "plans" ? "/plan-billing/editPlan" : "/plan-billing/editCoupon"}`);
  };

  const handleDelete = () => {
    alert("Delete functionality coming soon!");
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
              <BreadcrumbPage>Subscription</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
       <h1 className="h2 mt-4">Subscription</h1>

      <div className="flex justify-between items-center ">
        <div className="w-[40%]">
          <div className="flex flex-row justify-evenly gap-10 ">
            <button
              className={`font-bold text-center w-[50%] p-1 ${
                activeTab === "plans"
                  ? "border-b-2 border-[#742193] text-[#742193]"
                  : "text-black"
              }`}
              onClick={() => setActiveTab("plans")}
            >
              Plans
            </button>

            <button
              className={`font-bold text-center w-[50%] p-1 ${
                activeTab === "coupons"
                  ? "border-b-2 border-[#742193] text-[#742193]"
                  : "text-black"
              }`}
              onClick={() => setActiveTab("coupons")}
            >
              Coupons
            </button>
          </div>
        </div>
        <div>
          
          <SectionHeader
            buttonText={activeTab === "plans" ? "Add Plan" : "Add Coupon"}
            onButtonClick={handleAddCoupon}
            icon={<Plus />}
            className="mb-4"
          />
        </div>
      </div>

      {activeTab === "plans" && (
        <div className="min-w-xl mx-auto grid grid-cols-1  gap-4">
          <h2 className="darkText font-semibold mb-2">All Plans</h2>
          {["Standard", "Premium", "Enterprise"].map((plan, index) => (
            <PlanCard
              key={index}
              title={plan}
              monthlyPrice={1200 + index * 500}
              yearlyPrice={2400 + index * 1000}
              details={[
                "Feature 1",
                "Feature 2",
                "Feature 3",
                "Feature 4",
              ]}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
      </div>
      )}

      {activeTab === "coupons" && (
        <div className="min-w-xl mx-auto grid grid-cols-1  gap-4">
        <h2 className="darkText font-semibold mb-2">All Coupons</h2>
        {["DISCOUNT10", "SUMMER50", "WINTER30"].map((coupon, index) => (
            <CouponCard
              key={index}
              title={coupon}
              discount={10 + index * 20}
              details={[
                "Discount on all products",
                "Limited time offer",
                "Applicable site-wide",
                "Expires soon",
              ]}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
    </div>
      )}
    </section>
  );
};

export default Page;
