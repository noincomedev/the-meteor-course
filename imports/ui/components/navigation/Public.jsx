import React from "react";
import { Link, withRouter } from "react-router-dom";

export default withRouter(({ match }) => {
  return Meteor.settings.public.nav.public.LINKS.map(
    ({ to, label, key }) =>
      match.path != to &&
      match.isExact && (
        <Link key={key} to={to}>
          <h3 className="nav-link">{label}</h3>
        </Link>
      )
  );
});
