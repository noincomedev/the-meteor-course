import React, { Fragment } from "react";
import { withApollo } from "react-apollo";
import { Link, withRouter } from "react-router-dom";

export default withApollo(
  withRouter(({ client, history, match }) => {
    return (
      <div className="container align-items-center justify-content-end">
        {Meteor.settings.public.nav.private.LINKS.map(
          ({ to, label, key }) =>
            match.path != to &&
            match.isExact && (
              <Link key={key} to={to}>
                <h3 className="nav-link">{label}</h3>
              </Link>
            )
        )}
        <span>
          <i
            id="logout-button"
            className="fas fa-sign-out-alt"
            onClick={event => {
              Meteor.logout(() => {
                client.resetStore(() =>
                  history.push(Meteor.settings.public.router.index.PATH)
                );
              });
            }}
          />
        </span>
      </div>
    );
  })
);
