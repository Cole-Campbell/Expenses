import React from "react";
import { PageViewLayout } from "../PageViewLayout/PageViewLayout";
import { getExpenses } from "../../hooks/getExpenses";

export const DashboardPage = () => {
  const { data: expenses, isLoading, hasError } = getExpenses();

  return (
    <PageViewLayout title="Dashboard">
      <div>
        <div>
          {expenses.map((e) => (
            <div>{e.value}</div>
          ))}
        </div>
      </div>
    </PageViewLayout>
  );
};
