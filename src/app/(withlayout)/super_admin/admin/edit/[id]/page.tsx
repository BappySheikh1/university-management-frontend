"use client";

import { useAdminQuery } from "@/redux/api/adminApi";

type IAProps = {
  params: any;
};

const EditAdminPage = ({ params }: IAProps) => {
  const { id } = params;
  const { data, isLoading } = useAdminQuery(id);
  console.log(data);
  return <div></div>;
};

export default EditAdminPage;
