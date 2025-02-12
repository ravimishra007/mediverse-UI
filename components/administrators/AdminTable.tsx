"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
  import { Button } from "@/components/ui/button";
  import { Pencil, Trash2 } from "lucide-react";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AdminType } from "@/types/module";
import { useRouter } from "next/navigation";
  
  interface UserTableProps {
    admins: AdminType[];
    onDelete: (id: number) => void;
  }
  
  const AdminTable = ({ admins, onDelete }: UserTableProps) => {
    const router = useRouter()
  
    const handleViewDetails = (admin: AdminType) => {
    router.push(`/administrator/${admin?.id}`)
    };
  
    return (
      <div className=" w-full min-w-xl bg-white rounded-2xl shadow-lg  space-y-6">
        <Table>
          <TableHeader className="bg-[#7421931A] ">
            <TableRow>
              <TableHead className="w-[80px] font-bold">ID</TableHead>
              <TableHead className="font-bold">Name</TableHead>
              <TableHead className="font-bold">Country</TableHead>
              <TableHead className="font-bold">Join Date</TableHead>
              <TableHead className="font-bold text-center"> Role</TableHead>
              <TableHead className=" text-center font-bold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {admins.map((admin) => (
              <TableRow key={admin.id}>
                <TableCell>{admin.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={admin.avatar} />
                      <AvatarFallback>{admin.name[0]}</AvatarFallback>
                    </Avatar>
                    {admin.name}
                  </div>
                </TableCell>
                <TableCell>{admin.country}</TableCell>
                <TableCell>{new Date(admin.joinDate).toLocaleDateString()}</TableCell>
                <TableCell className="text-center">{admin.role}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewDetails(admin)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete User</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete {admin.name}? This action
                            cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => onDelete(admin.id)}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default AdminTable;