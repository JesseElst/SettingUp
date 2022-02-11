const Header = () => {
  const template = `
    <header> 
   <nav>
   <ul class="menu">
   <li><a href="#">  <img src="keyboard_arrow_down.svg" alt="pijl"/></a></li>
   <li><h3><a href="#">Menu</a></h3></li>
  <li><h3><a href="#">Collecties</a></h3></li>
  <li><h3><a href="#">Objecten</a></h3></li>
  <li><h3><a href="#">Tekeningen</a></h3></li>
  <li><h3><a href="#">Storingen</a></h3>
  <ul class="dropdown">
  <li>Collecties</li>
  <li> Filter 1</li>
  <li> Filter 2</li>
  <li> Filter 3</li>
  </ul></li>
  
   </ul>
   </nav>
    </header>`;
  return template;
};
export default Header;
