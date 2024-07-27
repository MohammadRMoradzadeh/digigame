import React from "react";
import Baner from "@/components/modules/baner/Baner";
import Offer from "@/components/modules/offer/Offer";
import Favorites from "@/components/modules/favorites/Favorites";
function HomePage() {
  return (
    <>
      <Baner />
      <Offer/>
      <Favorites/>
    </>
  );
}

export default HomePage;
