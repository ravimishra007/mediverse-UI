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

const CouponForm = () => {
  const [formData, setFormData] = useState({
    code: "",
    category: "",
    discountAmount: "",
    discountPercent: "",
    maxCap: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Coupon Added")
  };

  const handleCancel = () => {
    setFormData({
      code: "",
      category: "",
      discountAmount: "",
      discountPercent: "",
      maxCap: "",
      details: "",
    });
  };

  return (
    <div className=" flex items-center justify-center p-4 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full min-w-xl bg-white rounded-xl shadow-lg p-8 space-y-6 animate-fade-in"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Coupon Code</label>
            <Input
              placeholder="Enter Code"
              value={formData.code}
              onChange={(e) =>
                setFormData({ ...formData, code: e.target.value })
              }
              className="w-full transition-all duration-200 focus:ring-2 focus:ring-coupon-primary/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Category</label>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData({ ...formData, category: value })
              }
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

        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 space-y-2">
              <label className="text-sm font-bold text-gray-700">Discount</label>
              <Input
                type="number"
                placeholder="Enter Amount"
                value={formData.discountAmount}
                onChange={(e) =>
                  setFormData({ ...formData, discountAmount: e.target.value })
                }
                className="w-full transition-all duration-200 focus:ring-2 focus:ring-coupon-primary/20"
              />
            </div>
            <div className="flex items-center h-full pt-8">
              <span className="text-gray-500 font-medium">OR</span>
            </div>
            <div className="flex-1 space-y-2">
              <label className="text-sm font-bold text-gray-700">
                Discount Percent
              </label>
              <Input
                type="number"
                placeholder="0%-100%"
                value={formData.discountPercent}
                onChange={(e) =>
                  setFormData({ ...formData, discountPercent: e.target.value })
                }
                className="w-full transition-all duration-200 focus:ring-2 focus:ring-coupon-primary/20"
              />
            </div>
            <div className="flex-1 space-y-2">
              <label className="text-sm font-bold text-gray-700">
              Max Cap
              </label>
              <Input
                type="number"
                placeholder="Max Discount Amount"
                value={formData.discountPercent}
                onChange={(e) =>
                  setFormData({ ...formData, maxCap: e.target.value })
                }
                className="w-full transition-all duration-200 focus:ring-2 focus:ring-coupon-primary/20"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Details</label>
          <Textarea
            placeholder="Details"
            value={formData.details}
            onChange={(e) =>
              setFormData({ ...formData, details: e.target.value })
            }
            className="min-h-[100px] transition-all duration-200 focus:ring-2 focus:ring-coupon-primary/20"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-[#742193] text-white px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#742193]/90 focus:ring-2 focus:ring-[#742193]/20 active:scale-[0.98]"
          >
            Add Coupon
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 bg-[#FFCA74] text-gray-800 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#FFCA74]/90 focus:ring-2 focus:ring-[#FFCA74]/20 active:scale-[0.98]"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CouponForm;
