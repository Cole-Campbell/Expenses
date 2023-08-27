import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { query, collection, where, orderBy } from "firebase/firestore";
import { firestore } from "../services/firestore";
import { Expense } from "../types/expense";
import converter from "../utils/firebase";

export const getExpenses = () => {
  const ref = query(
    collection(firestore, "expenses").withConverter(converter<Expense>()),
    orderBy("value", "desc")
    // where("value", "==", 0)
  );

  const {
    data = [],
    isError,
    isLoading,
  } = useFirestoreQueryData<Expense>(["expenses", 0], ref);

  return { data, hasError: isError, isLoading };
};
