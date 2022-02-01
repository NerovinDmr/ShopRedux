import React from 'react';
import { Header, Footer, Navigation, Loader } from './components';
import { Home, About, Payment, VideoBlock, Catalog, Cart, SinglePageItem } from './pages';
import { Route } from 'react-router-dom';
import { paths } from "./constants";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Route path={paths.home} exact>
        <Home />
      </Route>
      <Route path={paths.catalog} exact>
        <Catalog />
      </Route>
      <Route path={paths.about} exact>
        <About />
      </Route>
      <Route path={paths.payment} exact>
        <Payment />
      </Route>
      <Route path={paths.video} exact>
        <VideoBlock />
      </Route>
      <Route path={paths.cart} exact>
        <Cart />
      </Route>
      <Route path={paths.item} exact>
        <SinglePageItem />
      </Route>
      <Route path={paths.loading} exact>
        <Loader />
      </Route>
      <Footer />
    </>

  );
}

export default App;
