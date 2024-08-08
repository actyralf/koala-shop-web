import { PromoCard } from "../components/PromoCard";
// import { OfferList } from "../components/OfferList";
import "./Home.css";

export function Home() {
  return (
    <>
      <div className="homepage">
        <div className="homepage-content">
          <h2>Home</h2>
          {/* <OfferList /> */}
          <PromoCard
            offer={{
              id: 1,
              title: "Koala Mug",
              description: "Description 1",
              price: 500,
              image: "koala-mug.jpg",
              category: "Category 1",
              leftInStock: 10,
            }}
          />
        </div>
      </div>
    </>
  );
}
