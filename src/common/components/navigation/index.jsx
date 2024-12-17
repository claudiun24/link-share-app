import Container from "./index.styled";
import Button from "../button";
import { NavLink, Link } from "react-router";
import LinkIcon from "../../../assets/ph_lock-key-fill.svg?react";
import ProfileIcon from "../../../assets/ph_user-circle-bold.svg?react";

const Navigation = () => {
  return (
    <Container>
      <div className="container__logo">
        <img
          alt="devlinks app logo"
          src="/assets/logo.png"
        />
      </div>

      <div className="container__links">
        <NavLink
          className={({ isActive }) =>
            isActive ? "links__route links__route--active" : "links-route"
          }
          end={true}
          to="/"
        >
          <LinkIcon />
          Links
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "links__route links__route--active" : "links__route"
          }
          end={true}
          to="/profile"
        >
          <ProfileIcon />
          Profile
        </NavLink>
      </div>
      {/* TODO: Replace slug with actual id 
      https://jamilacuisine.ro/tiramisu-cu-zmeura-desertul-perfect-pentru-craciun-reteta-video/*/}
      <Link to="/preview/1231231">
        <Button variant="outline">Preview</Button>
      </Link>
    </Container>
  );
};

Navigation.propTypes = {};

export default Navigation;
