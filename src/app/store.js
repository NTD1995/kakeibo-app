import { supabase } from "../lib/supabaseClient";

export const deleteExpense = async (id) => {};

const useStore = create((set) => ({
  expenses: [],
  selectedCategory: "all",
  fetchExpenses: async () => {},
  updateExpense: async (id, updatedData) => {
    const { error } = await supabase
      .from("expenses")
      .update(updatedData)
      .eq("id", id);
    if (error) console.error(error);
    fetchExpenses();
  },
  deleteExpense: async (id) => {
    const { error } = await supabase.from("expenses").delete().eq("id", id);
    if (error) console.error(error);
    fetchExpenses();
  },
}));

export default useStore;
