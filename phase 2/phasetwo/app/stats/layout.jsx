export default async function RootLayout({ children }) {
  return (
    <body>
      <section id="'Navigation">
        <nav>
          <div class="nav1">
            <div class="navItem" id="logo">
              <div class="logo">
                <a href="../Websites/main.html">
                  <img
                    src="../Media/Icons/phoney.png"
                    alt="Logo"
                    width="80"
                    height="80"
                  />
                </a>
              </div>
            </div>
            <div class="navItem"></div>
            <button id="statsButton" class="statsButton">
              <a class="statsLink" href="./stats.html">
                Statistics
              </a>
            </button>
            <div class="user" id="user"></div>\
            <div class="navItem" id="loginButton">
              <a class="login" href="login.html" id="login">
                Login
              </a>
            </div>
          </div>
        </nav>
      </section>
      {children}
    
        
    </body>
  );
}
