import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User } from "@/types/module";
import { Edit, ChevronLeft, ChevronRight, Trash2 } from "lucide-react";


interface AdministratorTableProps {
    users: User[];
    itemsPerPage?: number;
    onDelete?: (id: string) => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
  }
  
  export const AdministratorTable = ({ users, onDelete, itemsPerPage = 5 ,currentPage, setCurrentPage}: AdministratorTableProps) => {
  
    
    
    const totalPages = Math.ceil(users.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentUsers = users.slice(startIndex, startIndex + itemsPerPage);
  
    const handleDelete = (id: string) => {
      if (onDelete) {
        onDelete(id);
        alert("User deleted successfully!");
      } else {
        console.warn("onDelete function is not defined.");
      }
    };
  
  return (
    <div className="w-full min-w-xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm overflow-auto max-h-[80vh] border border-gray-100">
        <div className="min-w-full">
          <div className="bg-[#7421931A] px-6 py-3">
            <div className="grid grid-cols-5 gap-4 ">
              <div className="text-sm font-bold text-gray-700 ml-5">Name</div>
              <div className="text-sm font-bold text-gray-700">Role</div>
              <div className="text-sm font-bold text-gray-700">Join Date</div>
              <div className="text-sm font-bold text-gray-700">ID</div>
              <div className="text-sm font-bold text-gray-700 ml-5">Actions</div>
            </div>
          </div>
          
          <div className="divide-y divide-gray-100">
            {currentUsers.map((user) => (
              <div key={user.id} className="px-6 py-3 hover:bg-gray-50 transition-colors duration-150">
                <div className="grid grid-cols-5 gap-4 items-center">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatarUrl} alt={user.name} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-900">{user.name}</span>
                  </div>
                  <div className="text-sm text-gray-600">{user.role}</div>
                  <div className="text-sm text-gray-600">{user.joinDate}</div>
                  <div className="text-sm text-gray-600">{user.id}</div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      onClick={() => console.log("View details:", user.id)}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-600 hover:text-gray-700 hover:bg-gray-50"
                      onClick={() => console.log("Edit user:", user.id)}
                    >
                      <Edit className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleDelete(user.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-100 bg-white sticky bottom-0 z-10">
          <div className="text-sm text-gray-600">
          Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, users.length)} of {users.length} results
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={`h-8 w-8 ${
                  currentPage === page
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "text-gray-600"
                }`}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
