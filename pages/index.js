import Categories from "../sections/Categories";
import Customize from "../sections/Customize";
import HomePage from "../sections/HomePage";
import Testimonial from "../sections/Testimonial";
import Trending from "../sections/Trending";
import ProductDetail from "../sections/ProductDetail";

export default function Home() {
  return (
    <>
      <HomePage />
      <Categories />
      <Customize />
      <Trending />
      <Testimonial />
    </>
  );
}
