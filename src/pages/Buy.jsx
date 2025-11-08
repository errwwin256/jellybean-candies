import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Buy() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + (item.price || 49) * (item.quantity || 1),
    0
  );

  return (
    <section className="min-h-screen py-16 px-5 md:px-20 bg-gradient-to-b from-pink-50 via-white to-amber-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-jelly text-4xl md:text-5xl text-yellow-400 mb-10 drop-shadow-sm">
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">Your cart is empty </p>
            <a
              href="/our-beans"
              className="inline-block mt-6 bg-gradient-to-r from-jellyPink to-jellyBlue text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              Browse Beans
            </a>
          </div>
        ) : (
          <>
            {/* 🫘 Cart Items */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <AnimatePresence>
                {cartItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-28 h-28 object-contain mx-auto mb-3 drop-shadow-md"
                        loading="lazy"
                      />
                      <h3 className="text-xl font-jelly text-jellyPurple">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                        {item.flavor}
                      </p>
                      <p className="text-jellyBlue mt-2 font-semibold text-lg">
                        ₱{item.price || 49}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-center gap-3 mt-4">
                      <button
                        onClick={() =>
                          updateQuantity(item.name, (item.quantity || 1) - 1)
                        }
                        disabled={(item.quantity || 1) <= 1}
                        className="p-2 bg-jellyPink text-white rounded-full hover:opacity-90 transition disabled:opacity-40"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="text-lg font-semibold text-jellyPurple min-w-[2ch] text-center">
                        {item.quantity || 1}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.name, (item.quantity || 1) + 1)
                        }
                        className="p-2 bg-jellyBlue text-white rounded-full hover:opacity-90 transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="mt-4 flex items-center justify-center gap-2 text-sm text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-full transition-all"
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* 💰 Summary Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 text-center space-y-4"
            >
              <h3 className="text-2xl font-jelly text-jellyPurple">
                Total:{" "}
                <span className="text-jellyBlue font-bold">₱{total}</span>
              </h3>

              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <button
                  onClick={clearCart}
                  className="bg-red-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-500 transition shadow-md"
                >
                  Clear Cart
                </button>

                <button className="bg-gradient-to-r from-jellyPink to-jellyBlue text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition shadow-md">
                  Checkout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
