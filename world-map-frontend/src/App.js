import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Banner from "./components/basic_site_elements/banner";
import Map from "./components/map";
import Footer from "./components/basic_site_elements/footer";
import AfricaInfo from "./components/africa";
import SouthAmericaInfo from "./components/southAmerica";
import NorthAmericaInfo from "./components/northAmerica";
import EuropeInfo from "./components/europe";
import AsiaInfo from "./components/asia";
import AustraliaInfo from "./components/australia";
import AntarcticaInfo from "./components/antarctica";

const App = () => {
  return (
    <React.Fragment>
      <Banner />
      <Switch>
        <Route path="/africa-info" component={AfricaInfo} />
        <Route path="/antarctica-info" component={AntarcticaInfo} />
        <Route path="/asia-info" component={AsiaInfo} />
        <Route path="/australia-info" component={AustraliaInfo} />
        <Route path="/europe-info" component={EuropeInfo} />
        <Route path="/north-america-info" component={NorthAmericaInfo} />
        <Route path="/south-america-info" component={SouthAmericaInfo} />
        <Route path="/" component={Map} />

        <Route path="/"></Route>
        <Redirect from="/" to="/" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
