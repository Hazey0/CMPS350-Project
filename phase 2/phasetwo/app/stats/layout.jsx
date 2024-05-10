import "@/app/globals.css"
import "@/public/Styles/MyStyle.css"
export default async function RootLayout({ children }) {
  return (
    <body >
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

            <div class="user" id="user"></div>
            <div class="navItem" id="loginButton">
              <a class="login" href="../Websites/login.html" id="login">
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
