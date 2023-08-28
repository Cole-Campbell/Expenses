import React from "react";
import { PageViewLayout } from "../PageViewLayout/PageViewLayout";
import { getExpenses } from "../../hooks/getExpenses";
import { useNavigate } from "react-router-dom";

export const DashboardPage = () => {
  const { data: expenses, isLoading, hasError } = getExpenses();
  console.log(expenses);
  const navigate = useNavigate();
  return (
    <PageViewLayout title="Dashboard">
      <div>
        <button onClick={() => navigate("/expense")}>Create Expense</button>
        <div>
          {expenses.map((e) => (
            <div>{e.value}</div>
          ))}
        </div>
      </div>
    </PageViewLayout>
  );
};
