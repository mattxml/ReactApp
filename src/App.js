import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/LoginComponents/Login";
import Register from "./components/LoginComponents/Register";
import Wall from "./components/WallComponents/Wall";
import Reciptes from "./components/ReciptesComponents/Reciptes";
import Restaurants from "./components/RestaurantsComponents/Restaurants";
import Products from "./components/ProductsComponents/Products";
import Replacements from "./components/ReplacementsComponents/Replacements";
import Users from "./components/UsersComponents/Users";
import Posts from "./components/PostsComponents/Posts";
import About from "./components/About";
import Header from "./components/LoginComponents/MenuLogin";
import AddPost from "./components/PostsComponents/AddPost";
import { Container } from "./styles/LoginStyle";
import { createGlobalStyle } from "styled-components";
import { ContentContainer } from "./styles/WallStyle";
import { NewLoginInfo } from "./context/LoginInfo";
import { UsersRanking } from "./components/PostsComponents/UsersRanking";
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
  body{
    font-family: 'Titillium Web', sans-serif
  }
`;

const App = () => {
  const user = useContext(NewLoginInfo);
  return (
    <Container>
      <GlobalStyle />
      <Router>
        <Header /> <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        {user.username !== "" && (
          <ContentContainer>
            <div>Hello</div>
            <Route path="/about" component={About} />
            <Route path="/wall" component={Wall} />
            <Route path="/posts" component={Posts} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/products" component={Products} />
            <Route path="/reciptes" component={Reciptes} />
            <Route path="/replacements" component={Replacements} />
            <Route path="/users/:id" component={Users} />
            <Route path="/addpost" component={AddPost} />
            <UsersRanking />
          </ContentContainer>
        )}
      </Router>
    </Container>
  );
};

export default App;
