import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import Discover from "./pages/Discover";
import { Route, Switch } from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import GenreList from "./components/GenreList";
import ExploreMoreGames from "./components/ExploreMoreGames";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Discover />
        </Route>
        <Route path="/explore/:type">
          <ExploreMoreGames />
        </Route>
        <Route path="/wishlist">
          <Wishlist />
        </Route>
        <Route path="/genre/:category">
          <GenreList />
        </Route>
        <Route path="/search/:term">
          <Search />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
