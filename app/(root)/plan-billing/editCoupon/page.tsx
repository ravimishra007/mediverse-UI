'use client'
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import UpdateCouponForm from '@/components/plan&Billing/EditCoupon';
const existingCoupon = {
    code: "DISCOUNT50",
    category: "electronics",
    discountAmount: "50",
    discountPercent: "20",
    maxCap: "100",
    details: "This coupon gives a discount on all electronic items.",
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
              <BreadcrumbPage>Edit Coupon</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

 <h1 className="h2 mt-2">Edit Coupon</h1>
      <div>
      <UpdateCouponForm initialData={existingCoupon} />
      </div>

    </section>
  )
}

export default Page