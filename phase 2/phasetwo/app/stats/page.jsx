import { getStats } from "@/repos/stats";
export default async function Home() {
    const stats = await getStats();

  
    return (
      <>

<section id="'Navigation">
        <nav>
            <div class="nav1">

                 <div class="navItem" id="logo">
                        <div class="logo">
                            <a href="../Websites/main.html">
                                <img src="../Media/Icons/phoney.png" alt="Logo" width="80" height="80" />
                            </a>
                        </div>
                 </div>

                 <div class="navItem">
                    
                    
                 </div>
                 <button id="statsButton" class="statsButton">
                  <a class="statsLink" href="./stats.html">
                      Statistics
                  </a>
              </button>

                 <div class="user" id="user"></div>\
                 <div class="navItem" id="loginButton">
                    <a class="login" href="login.html" id="login">Login</a>
                 </div>
            </div>
    </nav>
    </section>

      <body className="ml-5 mt-5">
        <h2> Statistics</h2>
        <div className="color">
          <p>Currently Listed Phones: {stats.currentListedPhone}</p>
          <p>Sold Phones: {stats.soldPhones}</p>
          <p>Number Of Sellers: {stats.numberOfSellers}</p>
          <p>Number Of Customers: {stats.numberOfCustomers}</p>
          <p>Guests Visted Today: {stats.vistedToday}</p>
          <p>Phones Listed Today: {stats.listedToday}</p>
        </div>
      </body>
      </>
    );
  }