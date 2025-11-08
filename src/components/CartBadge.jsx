import { useCart } from "../context/CartContext";

export default function CartBadge() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="fixed bottom-5 right-5 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg p-3 px-5 text-sm font-semibold flex items-center gap-2 cursor-pointer hover:scale-105 transition">
      🛒 Cart ({totalItems})
    </div>
  );
}
