const Banner = () => {
  const template = `
      <section class="banner"> 
      <div class="wrapper">
      <h1> Goedemorgen, Sjaak </h1>
      <div class="search">
      <button> Collectie of Alles</button>
      <input type="text" placeholder="Begin met (vrij) zoeken, bijvoorbeeld met het invullen van een dossienaam...">
      </div>
      </div
      </section>`;
  return template;
};

export default Banner;
