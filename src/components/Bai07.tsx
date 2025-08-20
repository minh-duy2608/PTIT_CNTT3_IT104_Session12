import Header from "./Header07";
import Navigation07 from "./Navigation07";
import "../styles/Bai06.css";
import CartItem from "./CartItem";
import Article from "./Article07";
import Menu07 from "./Menu07";

export default function Bai07() {
  return (
    <>
      <Header />
      <Navigation07 />
      <div className="under-nav">
        <Menu07 />
        <div className="list-cart">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <Article />
      </div>
    </>
  );
}