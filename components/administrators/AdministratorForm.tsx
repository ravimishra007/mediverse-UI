'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { User, Lock, ShieldPlus } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.string().min(1, "Please select a role"),
  adminRights: z.array(z.string()),
});

type FormData = z.infer<typeof formSchema>;

const roles = [
  "System Administrator",
  "Security Manager",
  "Content Manager",
  "User Manager",
  "Report Analyst",
];

const adminRightOptions = [
  "User Management",
  "Security Settings",
  "System Configuration",
  "Content Management",
  "Report Generation",
];

const AdminForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adminRights: [],
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Form submitted:", data);
     alert("Form submitted")
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting");
    }
  };

  return (
    <div className=" flex items-center justify-center bg-gradient-to-br from-admin-light/20 to-white p-4">
      <div className="w-full min-w-xl animate-fadeIn backdrop-blur-sm bg-white/80 rounded-lg shadow-lg p-8 space-y-6">

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {/* Email Field */}
            <div className="relative">
              <label className="text-sm font-bold text-gray-700 mb-1 block">
                Email ID
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sm text-gray-400" />
                <input
                  {...register("email")}
                  type="email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 text-sm rounded-md focus:ring-2 focus:ring-admin-primary/20 focus:border-admin-primary transition-all duration-200"
                  placeholder="Enter Email"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="text-sm font-bold text-gray-700 mb-1 block">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  {...register("password")}
                  type="password"
                  className="w-full pl-10 pr-4 py-2 border text-sm border-gray-200 rounded-md focus:ring-2 focus:ring-admin-primary/20 focus:border-admin-primary transition-all duration-200"
                  placeholder="Enter Password"
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Administrator Name Field */}
              <div>
                <label className="text-sm font-bold text-gray-700 mb-1 block">
                  Administrator Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  className="w-full px-4 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-admin-primary/20 focus:border-admin-primary transition-all duration-200"
                  placeholder="Enter Name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Role Selection */}
              <div>
                <label className="text-sm font-bold text-gray-700 mb-1 block">
                  Role
                </label>
                <div className="relative">
                  <ShieldPlus  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <select
                    {...register("role")}
                    className="w-full pl-10 pr-4 text-sm py-2 text-gray-700 border border-gray-200 rounded-md focus:ring-2 focus:ring-admin-primary/20 focus:border-admin-primary transition-all duration-200 appearance-none bg-white"
                  >
                    <option value="">Select Role</option>
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.role && (
                  <p className="mt-1 text-sm text-red-500">{errors.role.message}</p>
                )}
              </div>
            </div>

            {/* Admin Rights */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-gray-700 block">
                Admin Rights
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {adminRightOptions.map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-3 p-3 border border-gray-200 rounded-md hover:bg-[#f0f0f0] transition-colors duration-200"
                  >
                    <input
                      type="checkbox"
                      {...register("adminRights")}
                      value={option}
                      className="rounded border-gray-300 text-admin-primary focus:ring-admin-primary"
                    />
                    <span className="text-sm text-gray-600">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#742193] hover:bg-[#57176e] text-white py-2 px-4 rounded-md  transition-colors duration-200 disabled:opacity-50"
            >
              {isSubmitting ? "Adding..." : "Add Admin"}
            </button>
            <Link href="/administrator">
            <button
              type="button"
              onClick={() => reset()}
              className="flex-1 bg-[#FFCA74] hover:bg-[#e7ad4e]  text-[#742193] py-2 px-4 rounded-md  transition-colors duration-200"
            >
              Cancel
            </button>
             </Link>
           
        </div>
        </form>
      </div>
    </div>
  );
};

export default AdminForm;