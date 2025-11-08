import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // 🛒 Add item to cart
  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((p) => p.name === item.name);
      if (exists) {
        toast.error(`${item.name} is already in your cart!`);
        return prev;
      }
      toast.success(`${item.name} added to cart! 🍬`);
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // 🔢 Update item quantity
  const updateQuantity = (name, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // ❌ Remove an item
  const removeFromCart = (name) => {
    setCartItems((prev) => prev.filter((p) => p.name !== name));
    toast(`${name} removed from cart.`, { icon: "🗑️" });
  };

  // 🧹 Clear all items
  const clearCart = () => {
    setCartItems([]);
    toast("Cart cleared! 🧹");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 🪄 Custom hook
export function useCart() {
  return useContext(CartContext);
}
