import "./Card.css"
import CardProgress from "./CardProgress";
import CardTable from "./CardTable";
import CardCoupon from "./CardCoupon";
import CardTotals from "./CardTotals";

function Card () {
    return (
        <section className="card-page">
        <div className="container">
          <div className="card-page-wrapper">
            <form className="card-form">
              <CardProgress />
              <div className="shop-table-wrapper">
                <CardTable />
                <CardCoupon />
              </div>
            </form>
            <div className="card-collaterals">
              <CardTotals />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Card