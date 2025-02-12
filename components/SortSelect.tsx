import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const SortSelect = ({ value, onChange }: SortSelectProps) => {
  return (
    <div>
      <h3 className="text-[#742193] font-semibold text-sm">Sort By</h3>

      <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="border-[#742193] focus:ring-[#742193]">
        {/* <SelectTrigger className="w-[180px]"> */}
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="id_asc">ID (Ascending)</SelectItem>
          <SelectItem value="id_desc">ID (Descending)</SelectItem>
          <SelectItem value="name_asc">Name (A-Z)</SelectItem>
          <SelectItem value="name_desc">Name (Z-A)</SelectItem>
          <SelectItem value="date_asc">Join Date (Oldest)</SelectItem>
          <SelectItem value="date_desc">Join Date (Newest)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortSelect;
