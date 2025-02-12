import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const SubscriptionDetails = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          Current Subscription
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          You are currently on the Pro plan
        </p>
      </div>

      <div className="max-w-md mx-auto bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
        <div className="text-center mb-6">
          <div className="text-[#742193] font-semibold">PRO PLAN</div>
          <div className="mt-2">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-gray-600">/month</span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {[
            "All Premium Features",
            "Unlimited Projects",
            "Priority Support",
            "Custom Domain",
            "Analytics Dashboard",
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#742193]" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="w-full bg-[#742193] hover:bg-[#57176e]">
            Manage Subscription
          </Button>
          <p className="text-xs text-gray-500 mt-4">
            Next billing date: January 1, 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetails;