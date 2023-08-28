import React from "react";
import { PageViewLayout } from "../PageViewLayout/PageViewLayout";
import { getCreateExpense } from "../../hooks/getCreateExpense";

export const ExpensePage = () => {
  const { mutate } = getCreateExpense();
  return (
    <PageViewLayout title="Expense">
      <button
        onClick={() =>
          mutate({
            title: "Text",
            value: 1000,
            date: new Date().toISOString(),
            description: "",
            guid: "",
          })
        }
      >
        Create
      </button>
    </PageViewLayout>
  );
};
