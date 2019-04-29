import React from "react";
import { Link, withRouter } from "react-router-dom";

import PublicNav from "../../components/navigation/Public";
import PrivateNav from "../../components/navigation/Private";

export default withRouter(({ match }) => (
  <nav className="nav container justify-space-bet">
    <Link to={Meteor.settings.public.router.index.PATH}>
      <h1 className="headline">
        {Meteor.settings.public.constants.pages.index.HEADLINE}
      </h1>
    </Link>
    {Meteor.userId() ? <PrivateNav /> : <PublicNav />}
  </nav>
));
