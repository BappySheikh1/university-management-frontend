import ActionBar from "@/components/ui/ActionBar";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageDepartmentPage = () => {
  return (
    <div>
      <ActionBar title="Department List">
        <Link href={`/super_admin/department/create`}>
          <Button>Create Department</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageDepartmentPage;
