import { getStats } from "@/repos/stats";
export default async function Home() {
    const stats = await getStats();

  
    return (
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
    );
  }