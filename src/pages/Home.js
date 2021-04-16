import getData from "../utils/getData";

const Home = async () => {
  const photos = await getData();
  const view = `
  <section class="banner">
    <h1>explore beyond horizon</h1>
    <p>Magna mundi referrentur qou, no rebum dignissim qui.</p>
    <p>Per qoudsu accussata id, agam labores.</p>
    <a href="" class="banner--button">view our work</a>
  </section>
  <main>
  <section class="main-gallery-container">
  <div class="main-gallery-container--optionsDisplay">
    <span></span>
    <span></span>
  </div>
  <div class="main-gallery-container--optionsFilter">
    <button>All</button>
    <button>Brandind</button>
    <button>Web</button>
    <button>Photography</button>
    <button>App</button>
  </div>
  <div class="pinteres">
  <div class="grid-container">
      ${photos
        .map(
          (photo) => `
          <img src="${photo.photo}" alt="${photo.author}" class="grid-item"/>
      `
        )
        .join("")}
    </div>
  </div>
    <div class="main-grid-container--button">
      <a href="">Show Me More</a>
    </div>
  </section>
</main>
    `;
  return view;
};

export default Home;
