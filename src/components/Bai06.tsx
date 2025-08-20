import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";
import "../styles/Bai06.css";

export default function Bai06() {
  return (
    <>
      <Header />
      <div className="under-header">
        <Menu />
        <div className="main-footer">
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}