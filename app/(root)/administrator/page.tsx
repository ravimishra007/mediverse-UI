// "use client";
// import React, { useEffect, useMemo, useState } from "react";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import {  User } from "@/types/module";
// import { mockUsers as initialAdministrator } from "@/data/administrator";
// import Filters from "@/components/AllFilters";
// import { Plus } from "lucide-react";
// import SectionHeader from "@/components/SectionHeader";
// import { useRouter } from "next/navigation";
// import { AdministratorTable } from "@/components/administrators/AdministratorTable";

// const sortOptions = [
//   { value: "all", label: "Default" },
//   { value: "id", label: "ID" },
//   { value: "joinDate", label: "Join Date" },
// ];

// const Page = () => {
//   const [users, setUsers] = useState<User[]>(initialAdministrator);
//   const [search, setSearch] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [sortBy, setSortBy] = useState("all");
//   const [currentPage, setCurrentPage] = useState(1);
//     const route = useRouter()


//   const handleDelete = (id: string) => {
//     setUsers(users.filter((user) => user.id !== (id)));
//   };
//   const handleAddQuizzes = () => {
//     route.push(`/administrator/addAdministrator`);
//   };


//   const filteredUsers = useMemo(() => {
//     return users
//       .filter(
//         (user) =>
//           user.name.toLowerCase().includes(search.toLowerCase()) &&
//           (selectedCategory === "all" || user.role === selectedCategory)
//       )
//       .sort((a, b) => {
//         if (sortBy === "id") return parseInt(b.id) - parseInt(a.id);
//         if (sortBy === "joinDate") return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime();
//         return 0;
//       });
//   }, [users, search, selectedCategory, sortBy]);

//   const categories = ["all", ...new Set(users.map((m) => m.role))];

//   useEffect(() => {
//     setCurrentPage(1); // Reset to first page when search, category, or sort changes
//   }, [search, selectedCategory, sortBy]);
  

//   return (
//     <>
//       <section className="min-h-screen bg-[#f9f9f9] pb-10 p-7">
//         {/* bg-[#f9f9f9] */}
//         <div className="">
//           <div>
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem>
//                   <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage>Administrators</BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//           </div>


//            <SectionHeader
//           title="Administrators"
//           buttonText="Add Admin"
//           onButtonClick={handleAddQuizzes}
//           icon={<Plus />}
//           className="mb-4" 
//         />

//           <div className=" h-12 mt-4">
//             <div className="min-w-xl mx-auto">
//               <div className="mb-2 space-y-4">
//                 <Filters
//                   search={search}
//                   setSearch={setSearch}
//                   selectedCategory={selectedCategory}
//                   setSelectedCategory={setSelectedCategory}
//                   sortBy={sortBy}
//                   setSortBy={setSortBy}
//                   categories={categories}
//                   sortOptions={sortOptions}
//                 />
//               </div>
//               <div>

//               {filteredUsers.length === 0 ? 
//               <p>No users found.</p> : 
//               <AdministratorTable 
//               users={filteredUsers} 
//               itemsPerPage={5} 
//               onDelete={handleDelete} 
//               currentPage={currentPage} 
//               setCurrentPage={setCurrentPage}
//               />}

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Page;


'use client'

import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import SortSelect from "@/components/SortSelect";
import { admins as initialUsers } from "@/data/administrator";
import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import AdminTable from "@/components/administrators/AdminTable";
import { AdminType } from "@/types/module";
import SectionHeader from "@/components/SectionHeader";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const ITEMS_PER_PAGE = 5;
 const roles = ["All", "Tech Lead","QA Engineer","Backend Dev","Product Manager","DevOps Engineer","System Analyst"];
const Page = () => {
  const [admins, setAdmins] = useState<AdminType[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("id_asc");
  const [currentPage, setCurrentPage] = useState(1);
  const route = useRouter()

  useEffect(() => {
    setAdmins(initialUsers);
  }, []);

  // Filter and sort users
  const filteredUsers = admins
    .filter((admin) => {
      const matchesSearch = admin.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory =
        category === "All" || admin.role === category;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "id_asc":
          return a.id - b.id;
        case "id_desc":
          return b.id - a.id;
        case "name_asc":
          return a.name.localeCompare(b.name);
        case "name_desc":
          return b.name.localeCompare(a.name);
        case "date_asc":
          return new Date(a.joinDate).getTime() - new Date(b.joinDate).getTime();
        case "date_desc":
          return new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime();
        default:
          return 0;
      }
    });


  // Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleDelete = (id: number) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
  };

  const handleAddQuizzes = () => {
    route.push(`/administrator/addAdministrator`);
  };

  return (
    <section className="h-auto   p-7">
    <div className="container mx-auto">
      <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Administrators</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <SectionHeader
          title="Administrators"
          buttonText="Add Admin"
          onButtonClick={handleAddQuizzes}
          icon={<Plus />}
          className="mb-4" 
        />


      
      <div className="grid gap-4 md:grid-cols-3 mb-6 ">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter value={category} onChange={setCategory} subscriptionOptions={roles}/>
        <SortSelect value={sortBy} onChange={setSortBy} />
      </div>

      {/* <UserTable users={paginatedUsers} onDelete={handleDelete} /> */}
      <div className="p-3">
      {typeof window !== "undefined" && <AdminTable admins={paginatedUsers} onDelete={handleDelete} />}

      </div>


      <div className="mt-4">

      {typeof window !== "undefined" && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink
                  onClick={() => setCurrentPage(i + 1)}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        )}
      </div>
    </div>
    </section>
  );
};

export default Page;
