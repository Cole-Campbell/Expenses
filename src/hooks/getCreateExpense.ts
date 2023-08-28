import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
import { collection } from "firebase/firestore";
import { firestore } from "../services/firestore";
import { Expense } from "../types/expense";
import converter from "../utils/firebase";
import { useUserContext } from "../context/UserContext";

export const getCreateExpense = () => {
  const { user } = useUserContext();
  const ref = collection(
    firestore,
    `/users/${user?.uid}/expense`
  ).withConverter(converter<Expense>());
  const { mutate, isError, isLoading } = useFirestoreCollectionMutation(ref);

  return { mutate, hasError: isError, isLoading };
};
