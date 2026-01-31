// src/store/cartStore.ts
import { create } from "zustand";
import { Product } from "@/types/product.type";

type CartItem = Product;

type CartState = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  //   removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addToCart: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i,
          ),
        };
      }
      return { items: [...state.items, item] };
    }),
  //   removeFromCart: (id) =>
  //     set((state) => ({
  //       items: state.items.filter((i) => i.id !== id),
  //     })),
  clearCart: () => set({ items: [] }),
}));
