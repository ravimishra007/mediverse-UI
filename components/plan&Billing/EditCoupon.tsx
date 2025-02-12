import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CouponFormData {
  code: string;
  category: string;
  discountAmount: string;
  discountPercent: string;
  maxCap: string;
  details: string;
}

interface UpdateCouponFormProps {
  initialData: CouponFormData;
}

const UpdateCouponForm = ({ initialData }: UpdateCouponFormProps) => {
  const [formData, setFormData] = useState<CouponFormData>(initialData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Coupon Data:", formData);
    alert("Coupon details updated successfully!");
  };

  const handleReset = () => {
    setFormData(initialData);
  };

  return (
    <div className="flex items-center justify-center p-4 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full min-w-xl bg-white rounded-xl shadow-lg p-8 space-y-6 animate-fade-in"
      >
        {/* Coupon Code */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Coupon Code</label>
            <Input
              placeholder="Enter Code"
              value={formData.code}
              onChange={(e) => setFormData({ ...formData, code: e.target.value })}
              className="w-full transition-all duration-200 focus:ring-2 focus:ring-coupon-primary/20"
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Category</label>
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger className="w-full transition-all duration-200 focus:ring-2 focus:ring-coupon-primary/20">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Discount Fields */}
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 space-y-2">
              <label className="text-sm font-bold text-gray-700">Discount Amount</label>
              <Input
                type="number"
                placeholder="Enter Amount"
                value={formData.discountAmount}
                onChange={(e) => setFormData({ ...formData, discountAmount: e.target.value })}
                className="w-full transition-all duration-200 focus:ring-2 focus:ring-coupon-primary/20"
              />
            </div>

            <div className="flex items-center h-full pt-8">
              <span className="text-gray-500 font-medium">OR</span>
            </div>

            <div className="flex-1 space-y-2">
              <label className="text-sm font-bold text-gray-700">Discount Percent</label>
              <Input
                type="number"
                placeholder="0%-100%"
                value={formData.discountPercent}
                onChange={(e) => setFormData({ ...formData, discountPercent: e.target.value })}
                className="w-full transition-all duration-200 focus:ring-2 focus:ring-coupon-primary/20"
              />
            </div>

            <div className="flex-1 space-y-2">
              <label className="text-sm font-bold text-gray-700">Max Cap</label>
              <Input
                type="number"
                placeholder="Max Discount Amount"
                value={formData.maxCap}
                onChange={(e) => setFormData({ ...formData, maxCap: e.target.value })}
                className="w-full transition-all duration-200 focus:ring-2 focus:ring-coupon-primary/20"
              />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Details</label>
          <Textarea
            placeholder="Details"
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            className="min-h-[100px] transition-all duration-200 focus:ring-2 focus:ring-coupon-primary/20"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-[#742193] text-white px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#742193]/90 focus:ring-2 focus:ring-[#742193]/20 active:scale-[0.98]"
          >
            Update Coupon
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 bg-[#FFCA74] text-gray-800 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#FFCA74]/90 focus:ring-2 focus:ring-[#FFCA74]/20 active:scale-[0.98]"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCouponForm;
