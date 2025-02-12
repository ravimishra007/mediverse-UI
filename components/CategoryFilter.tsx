import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CategoryFilterProps {
  value: string;
  onChange: (value: string) => void;
  subscriptionOptions: string[];
}

const CategoryFilter = ({ value, onChange,subscriptionOptions }: CategoryFilterProps) => {
  return (
    <div>
      <h3 className="text-[#742193] font-semibold text-sm">Category</h3>

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className=" border-[#742193] focus:ring-[#742193]">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {subscriptionOptions.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
