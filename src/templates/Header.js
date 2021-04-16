const Header = () => {
  const view = `
	<header>
	<img src="../src/assets/images/logo.png" alt="sneak logo" class="header--logo" />
	<nav class="header--menu-options">
	  <ul>
		<li>
		  <a href="">All</a>
		</li>
		<li>
		  <a href="">Branding</a>
		</li>
		<li>
		  <a href="">Web</a>
		</li>
		<li>
		  <a href="">Photography</a>
		</li>
		<li>
		  <a href="">App</a>
		</li>
	  </ul>
	</nav>
	<nav class="header--menu">
	  <span></span>
	</nav>
  </header>
	  `;
  return view;
};

export default Header;
