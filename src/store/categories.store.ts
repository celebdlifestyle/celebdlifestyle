import { create } from "zustand";
import axios from "axios";
import { Category } from "@/types/category.type";

interface CategoryStore {
  categories: Category[];
  loading: boolean;
  error: string | null;

  fetchCategories: () => Promise<void>;
  createCategory: (data: any) => Promise<void>;
  updateCategory: (id: string, data: any) => Promise<void>;
  deleteCategory: (id: string) => Promise<void>;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  loading: false,
  error: null,

  fetchCategories: async () => {
    try {
      set({ loading: true });

      const res = await axios.get("/api/categories");

      set({ categories: res.data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  createCategory: async (data) => {
    try {
      set({ loading: true });

      const res = await axios.post("/api/categories", data);

      set((state) => ({
        categories: [res.data, ...state.categories],
        loading: false,
      }));
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  updateCategory: async (id, data) => {
    try {
      set({ loading: true });

      const res = await axios.put(`/api/categories/${id}`, data);

      set((state) => ({
        categories: state.categories.map((c) => (c._id === id ? res.data : c)),
        loading: false,
      }));
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  deleteCategory: async (id) => {
    try {
      await axios.delete(`/api/categories/${id}`);

      set((state) => ({
        categories: state.categories.filter((c) => c._id !== id),
      }));
    } catch (err: any) {
      set({ error: err.message });
    }
  },
}));
