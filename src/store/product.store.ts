"use client";

import { create } from "zustand";
import axios from "axios";
import { Product } from "@/types/product.type";

interface ProductStore {
  products: Product[];
  loading: boolean;
  error: string | null;

  fetchProducts: () => Promise<void>;
  createProduct: (data: any) => Promise<void>;
  updateProduct: (id: string, data: any) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    try {
      set({ loading: true });

      const res = await axios.get("/api/products");

      set({ products: res.data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  createProduct: async (data) => {
    try {
      set({ loading: true });

      const res = await axios.post("/api/products", data);

      set((state) => ({
        products: [res.data, ...state.products],
        loading: false,
      }));
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  updateProduct: async (id, data) => {
    try {
      set({ loading: true });

      const res = await axios.put(`/api/products/${id}`, data);

      set((state) => ({
        products: state.products.map((p) =>
          p._id.toString() === id ? res.data : p,
        ),
        loading: false,
      }));
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },

  deleteProduct: async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);

      set((state) => ({
        products: state.products.filter((p) => p._id.toString() !== id),
      }));
    } catch (err: any) {
      set({ error: err.message });
    }
  },
}));
