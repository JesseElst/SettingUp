import "./scss/style.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ZoekComponent from "./components/ZoekComponent";

const app = () => {
  document.getElementById("header").innerHTML = Header();
  document.getElementById("banner").innerHTML = Banner();
  document.getElementById("banaan").innerHTML = ZoekComponent();
};

//Init app
app();
