'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldPlus } from "lucide-react";
import { useRef, useState } from "react";

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
const AdminDetails = () => {
    const [adminName, setAdminName] = useState("Ravi Mishra");
    const [mobile, setMobile] = useState("+91 - 9876543210");
    const [email, setEmail] = useState("ravimishra007@gmail.com");
    const [address, setAddress] = useState("Kali Devi Mandir");
    const [city, setCity] = useState("ChitraKoot");
    const [stateName, setStateName] = useState("Uttar Pradesh");
    const [country, setCountry] = useState("India");
    const [pincode, setPincode] = useState("202010");
  
    // Role
    const [role, setRole] = useState<string>("");
  
    // Admin Rights (multiple checkboxes)
    const [selectedRights, setSelectedRights] = useState<string[]>([]);
  

    const [image, setImage] = useState("https://github.com/shadcn.png");
    // Reference to the hidden file input element
    const fileInputRef = useRef<HTMLInputElement | null>(null);
  
    // Handle button click by programmatically clicking the hidden file input
    const handleButtonClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
  
    // Handle file input change event
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        // Convert file to data URL for preview
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result) {
            setImage(reader.result.toString());
          }
        };
        reader.readAsDataURL(file);
      }
    };

    const handleRightChange = (option: string) => {
        setSelectedRights((prev) => {
          if (prev.includes(option)) {
            return prev.filter((right) => right !== option);
          } else {
            return [...prev, option];
          }
        });
      };
    
      // Submit handler
      const handleSubmit = () => {
        const formData = {
          image,
          adminName,
          mobile,
          email,
          address,
          city,
          state: stateName,
          country,
          pincode,
          role,
          selectedRights,
        };
    
        console.log("Form Data:", formData);
        // You can now send `formData` to your API or handle it however you need.
      };
    
    
  
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm ">
      <div className="space-y-6">
        <div className="flex items-start gap-6">
          <div className=" p-1 flex justify-center items-center flex-col ">
            <img
             src={image}
              alt="Profile"
              className="w-28 h-28 rounded-3xl object-cover  "
            />
           <button 
            onClick={handleButtonClick}
           className="mt-1 border border-[#c858ba] bg-[#7421931A] text-sm  text-[#742193] p-1 rounded-lg">
            Choose Photo
           </button>
           <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-[#2E2E2E] font-bold">
                Administrator Name
              </Label>
              <Input
                id="fullName"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}                className="mt-1 text-[#2E2E2E]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="mobile" className="text-[#2E2E2E] font-bold">
                  Mobile Number
                </Label>
                <Input
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="mt-1 text-[#2E2E2E]"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[#2E2E2E] font-bold">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 text-[#2E2E2E]"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="address" className="text-[#2E2E2E] font-bold">
            Address Line{" "}
          </Label>
          <Input
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 text-[#2E2E2E]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city" className="text-[#2E2E2E] font-bold">
              City
            </Label>
            <Input
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 text-[#2E2E2E]"
            />
          </div>
          <div>
            <Label htmlFor="state" className="text-[#2E2E2E] font-bold">
              State
            </Label>
            <Input
              id="state"
              value={stateName}
              onChange={(e) => setStateName(e.target.value)}
              className="mt-1 text-[#2E2E2E]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="country" className="text-[#2E2E2E] font-bold">
              Country
            </Label>
            <Input
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="mt-1 text-[#2E2E2E]"
            />
          </div>
          <div>
            <Label htmlFor="pincode" className="text-[#2E2E2E] font-bold">
              Pincode
            </Label>
            <Input
              id="pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}

              className="mt-1 text-[#3b3b3b]"
            />
          </div>
        </div>

        {/* Role Selection */}
        <div className="">
          <label className="text-sm font-bold text-gray-700 mb-1 gap-4 block">
            Role
          </label>
          <div className="relative">
            <ShieldPlus className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select 
             value={role}
             onChange={(e) => setRole(e.target.value)}
            className="w-full pl-10 pr-4 text-sm py-2 text-gray-700 border border-gray-200 rounded-md focus:ring-2 focus:ring-admin-primary/20 focus:border-admin-primary transition-all duration-200 appearance-none bg-white">
              <option value="">Select Role</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Admin Rights */}
      <div className="space-y-3 mt-5">
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
                value={option}
                checked={selectedRights.includes(option)}
                onChange={() => handleRightChange(option)}
                className="rounded border-gray-300 text-admin-primary focus:ring-admin-primary"
              />
              <span className="text-sm text-gray-600">{option}</span>
            </label>
          ))}
        </div>
      </div>


      <div className="flex space-x-4  mt-5">
            <button
              type="submit"
              onClick={handleSubmit}
              className=" bg-[#742193] hover:bg-[#57176e] text-white py-2 px-10 rounded-md  transition-colors duration-200 disabled:opacity-50"
            >
              Save Details
            </button>

            <button
              type="button"
              className=" bg-[#E00000] hover:bg-[#b82c2c] text-white py-2 px-10 rounded-md  transition-colors duration-200 disabled:opacity-50"
            >
              Delete Admin
            </button>
           
        </div>

    </div>
  );
};

export default AdminDetails;
