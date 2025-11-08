import BeanCard from "../components/BeanCard";

// 🫘 21 Beans — easily scalable and mobile/tablet-friendly
const beans = [
  {
    name: "Strawberry Bliss",
    color: "#FF6FB5",
    image: "/images/beans/1.png",
    flavor: "Sweet and fruity goodness that melts in your mouth!",
  },
  {
    name: "Lemon Zing",
    color: "#FFDE59",
    image: "/images/beans/2.png",
    flavor: "Tangy and bright — sunshine in a bite!",
  },
  {
    name: "Minty Cool",
    color: "#6EEB83",
    image: "/images/beans/3.png",
    flavor: "Refreshing mint with a cool finish.",
  },
  {
    name: "Blueberry Dream",
    color: "#5AA9E6",
    image: "/images/beans/4.png",
    flavor: "A dreamy berry burst you’ll love!",
  },
  // 🟣 Add your remaining 17 beans here
  // Example:
  {
    name: "Grape Pop",
    color: "#A46BFF",
    image: "/images/beans/5.png",
    flavor: "Juicy grape sweetness with a fizzy twist.",
  },
  {
    name: "Cherry Splash",
    color: "#FF4C4C",
    image: "/images/beans/6.png",
    flavor: "Classic cherry candy flavor that pops!",
  },
  {
    name: "Mango Tango",
    color: "#FFC54D",
    image: "/images/beans/7.png",
    flavor: "Exotic mango flavor with a tangy kick.",
  },
  {
    name: "Coconut Kiss",
    color: "#F7F7F7",
    image: "/images/beans/8.png",
    flavor: "Smooth tropical coconut delight.",
  },
  {
    name: "Cola Fizz",
    color: "#9C6644",
    image: "/images/beans/9.png",
    flavor: "Bubbly cola fun in every bite!",
  },
  {
    name: "Peach Glow",
    color: "#FFB085",
    image: "/images/beans/10.png",
    flavor: "Soft, juicy peach flavor that warms your heart.",
  },
  {
    name: "Apple Crisp",
    color: "#9EE493",
    image: "/images/beans/11.png",
    flavor: "Crisp apple taste with a candy crunch.",
  },
  {
    name: "Banana Burst",
    color: "#FFF275",
    image: "/images/beans/12.png",
    flavor: "Sweet banana flavor — simply a-peeling!",
  },
  {
    name: "Raspberry Rush",
    color: "#E85D75",
    image: "/images/beans/13.png",
    flavor: "Bold, tangy raspberry explosion.",
  },
  {
    name: "Pineapple Pop",
    color: "#FFEC5C",
    image: "/images/beans/14.png",
    flavor: "Tropical tang with a pineapple twist.",
  },
  {
    name: "Watermelon Wave",
    color: "#FF6B6B",
    image: "/images/beans/15.png",
    flavor: "Juicy watermelon summer vibes!",
  },
  {
    name: "Bubblegum Blast",
    color: "#FF9CEE",
    image: "/images/beans/16.png",
    flavor: "Nostalgic bubblegum sweetness!",
  },
  {
    name: "Orange Crush",
    color: "#FFA64D",
    image: "/images/beans/17.png",
    flavor: "Citrusy orange fun that never ends!",
  },
  {
    name: "Cotton Candy Cloud",
    color: "#E5B9FF",
    image: "/images/beans/18.png",
    flavor: "Fluffy sweetness straight from the fair!",
  },
  {
    name: "Chocolate Dream",
    color: "#8D5524",
    image: "/images/beans/19.png",
    flavor: "Rich chocolate indulgence in a bean.",
  },
  {
    name: "Kiwi Kiss",
    color: "#B5E48C",
    image: "/images/beans/20.png",
    flavor: "Tangy kiwi perfection that tickles your taste buds.",
  },
  {
    name: "Vanilla Velvet",
    color: "#FFF8E7",
    image: "/images/beans/21.png",
    flavor: "Smooth vanilla cream flavor.",
  },
];

export default function OurBeans() {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-20 bg-gradient-to-b from-pink-50 via-white to-amber-50">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-jelly text-blue-400 mb-10 drop-shadow-[0_2px_6px_rgba(255,182,193,0.4)]">
        Our Beans
      </h2>

      {/* 🫘 Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
        {beans.map((bean, idx) => (
          <BeanCard key={idx} {...bean} />
        ))}
      </div>
    </section>
  );
}
