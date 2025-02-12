"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  PieChart,
  Blocks,
  Box,
  BookOpen,
  Users,
  CreditCard,
  HelpCircle,
  ShieldPlus,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: PieChart, label: "Analytics", href: "/analytics" },
  { icon: Blocks, label: "Modules", href: "/modules" },
  { icon: Box, label: "3D Anatomy", href: "/anatomy" },
  { icon: BookOpen, label: "Quizzes", href: "/quizzes" },
  { icon: ShieldPlus, label: "Administrator", href: "/administrator" },
  { icon: Users, label: "Users", href: "/users" },
  { icon: CreditCard, label: "Plan & Billing", href: "/plan-billing" },
];

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const pathname = usePathname();

  const router = useRouter()


  useEffect(() => {
    const foundItem = navItems.find((item) => pathname.startsWith(item.href));
    if (foundItem) {
      setActiveItem(foundItem.label);
    }
  }, [pathname,router]);


  return (
    <div className="relative h-[calc(100vh-3.5rem)]">
      <div
        className={cn(
          "h-full bg-white border-r border-gray-200 transition-all duration-300 ease-in-out z-50",
          isCollapsed ? "w-[60px]" : "w-[240px]"
        )}
      >
        {/* Profile Section */}
        <div className={` border-b border-gray-200 ${isCollapsed? "p-2" : "p-4" }`}>
          
          <div className=  {`flex items-center   ${isCollapsed ? ' gap-3 borderColor rounded-[10px] bg-[#7421931A] ' : "gap-3 border border-[#c858BA] rounded-[10px] bg-[#7421931A] p-3"}`}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>RM</AvatarFallback>
            </Avatar>
            {!isCollapsed && (
              <div className="flex flex-col">
                <span className="text-sm font-medium ml-3">Ravi Mishra</span>
                <Link href="/administrator/1">
                <Button className="bg-[white] text-xs text-gray-500 h-[20px] hover:bg-gray-50">
                View Profile
                </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center w-full justify-start gap-3 mb-1 transition-colors px-3 py-2 rounded-md ",
                isCollapsed ? "px-2" : "px-3",
                activeItem === item.label
                  ? "text-[#742193] commonBG"
                  : "text-[black] hover:text-[#742193] hover:bg-gray-50"
              )}
              onClick={() => setActiveItem(item.label)}
            >
              <item.icon
                size={20}
                className={cn(
                  activeItem === item.label ? "text-[#742193]" : "text-gray-600"
                )}
              />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Help Section */}
        <div className="absolute bottom-0 left-0 right-0 p-2 border-t border-gray-200">
          <Link
            href="/help"
            className={cn(
              "flex items-center w-full justify-start gap-3 px-3 py-2 rounded-md",
              isCollapsed ? "px-2" : "px-3"
            )}
          >
            <HelpCircle size={20} className="text-gray-600" />
            {!isCollapsed && <span>Help</span>}
          </Link>
        </div>

        {/* Collapse Button */}
        <button
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 rounded-full borderColor commonDarkBG text-[white] shadow-sm flex items-center justify-center"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
};
