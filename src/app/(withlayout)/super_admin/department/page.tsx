import ActionBar from "@/components/ui/ActionBar";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageDepartmentPage = () => {
  return (
    <div>
      <h1> Department List</h1>

      <ActionBar title="Department List">
        <Link href={`/super_admin/department/create`}>
          <Button>Create Department</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageDepartmentPage;
