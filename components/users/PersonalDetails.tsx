import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PersonalDetails = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm ">
      <div className="space-y-6">
        <div className="flex items-start gap-6">
            <div className=" ">
          <img
            src="https://github.com/shadcn.png"
            alt="Profile"
            className="w-28 h-28 rounded-3xl object-cover mt-7 "
          />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <Label htmlFor="fullName" className="text-[#2E2E2E] font-bold">Full Name</Label>
              <Input
                id="fullName"
                defaultValue="Circulatory System"
                className="mt-1 text-[#2E2E2E]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="mobile" className="text-[#2E2E2E] font-bold">Mobile Number</Label>
                <Input
                  id="mobile"
                  defaultValue="+91 - 9876543210"
                  className="mt-1 text-[#2E2E2E]"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[#2E2E2E] font-bold">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="csg123456@gmail.com"
                  className="mt-1 text-[#2E2E2E]"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="address1" className="text-[#2E2E2E] font-bold">Address Line 1</Label>
          <Input
            id="address1"
            defaultValue="Flat, House No, Building"
            className="mt-1 text-[#2E2E2E]"
          />
        </div>

        <div>
          <Label htmlFor="address2" className="text-[#2E2E2E] font-bold">Address Line 2</Label>
          <Input
            id="address2"
            defaultValue="Area, Colony, Street, Sector, Village"
            className="mt-1 text-[#2E2E2E]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city" className="text-[#2E2E2E] font-bold">City</Label>
            <Input id="city" defaultValue="Mumbai" className="mt-1 text-[#2E2E2E]" />
          </div>
          <div>
            <Label htmlFor="state" className="text-[#2E2E2E] font-bold">State</Label>
            <Input id="state" defaultValue="Maharashtra" className="mt-1 text-[#2E2E2E]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="country" className="text-[#2E2E2E] font-bold">Country</Label>
            <Input id="country" defaultValue="India" className="mt-1 text-[#2E2E2E]" />
          </div>
          <div>
            
            <Label htmlFor="pincode" className="text-[#2E2E2E] font-bold">Pincode</Label>
            <Input id="pincode" defaultValue="400001" className="mt-1 text-[#3b3b3b]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
