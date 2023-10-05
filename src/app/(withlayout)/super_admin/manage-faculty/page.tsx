import ActionBar from "@/components/ui/ActionBar";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageFacultyPage = () => {
  return (
    <div>
      <ActionBar title="Faculty List">
        <Link href={`/super_admin/manage-faculty/create`}>
          <Button>Create Faculty</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageFacultyPage;
