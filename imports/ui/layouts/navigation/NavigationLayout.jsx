import React from "react";
import { Link, withRouter } from "react-router-dom";

import PublicNav from "../../components/navigation/Public";
import PrivateNav from "../../components/navigation/Private";

export default withRouter(({ match }) => (
  <nav className="nav container align-items-center justify-space-bet">
    <Link to={Meteor.settings.public.router.index.PATH}>
      <h3 className="headline">{Meteor.settings.public.nav.logo.LABEL}</h3>
    </Link>
    {Meteor.userId() ? <PrivateNav /> : <PublicNav />}
  </nav>
));
