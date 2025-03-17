export const HomeNav = () => {
  return`
  <div class="home-nav">
    <div class="left-home-nav">
      <div class="comp-one">
        <img src="assets/img/G.png" alt="G" />
        <p class="title-one">row</p>
        <p class="title-two">Mate</p>
      </div>

      <button class="home-mobile-menu-btn" aria-label="Toggle mobile menu" aria-expanded="false">
        <div class="home-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>

    <div class="comp-two">
      <a href="#fitur" class="text-one">Fitur</a>
      <a href="#support" class="text-two">Support</a>
      <a href="#sosial" class="text-three">Sosial</a>
      <a href="#guide" class="text-four">Guide</a>
    </div>

    <div class="right-home-nav">
      <a href="#logout" class="comp-three">Logout</a>
    </div>
  </div>
  `
}