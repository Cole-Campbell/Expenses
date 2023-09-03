import { useFirestoreQueryData } from "@react-query-firebase/firestore";
import { query, collection, where, orderBy } from "firebase/firestore";
import { firestore } from "../services/fireBase";
import { Expense } from "../types/expense";
import converter from "../utils/firebase";
import { useUserContext } from "../context/UserContext";

export const getExpenses = () => {
  const {user} = useUserContext()
  const ref = query(
    collection(firestore, `/users/${user?.uid}/expense`).withConverter(converter<Expense>()),
    orderBy("value", "desc")
    // where("value", "==", 0)
  );

  const {
    data = [],
    isError,
    isLoading,
  } = useFirestoreQueryData<Expense>([`/users/${user?.uid}/expense`], ref, {}, {enabled: !!user?.uid});

  return { data, hasError: isError, isLoading };
};
