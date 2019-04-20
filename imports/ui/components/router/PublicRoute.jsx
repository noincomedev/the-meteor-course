import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { PropTypes } from "prop-types";
import { Link, Route, Redirect, withRouter } from "react-router-dom";

const PublicRoute = ({
  component,
  content,
  exact,
  match,
  name,
  path,
  title
}) => {
  if (Meteor.userId()) return <Redirect to="/" />;
  console.log(match);
  return (
    <Route
      exact={exact}
      path={path}
      render={props => (
        <Fragment>
          <Helmet>
            <title>{`${Meteor.settings.public.name} | ${title}`}</title>
            <meta name={name} content={content} />
          </Helmet>
          <nav className="nav container justify-space-bet">
            <Link to={Meteor.settings.public.router.public_routes.index.PATH}>
              <h1 className="headline">
                {Meteor.settings.public.constants.pages.index.HEADLINE}
              </h1>
            </Link>
            {match.path ==
              Meteor.settings.public.router.public_routes.index.PATH &&
              match.isExact &&
              Meteor.settings.public.nav.public.LINKS.map(
                ({ to, label, key }) => (
                  <Link key={key} to={to}>
                    <h3 className="nav-link">{label}</h3>
                  </Link>
                )
              )}
          </nav>
          <main id="main">{React.createElement(component)}</main>
        </Fragment>
      )}
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  exact: PropTypes.bool,
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default withRouter(PublicRoute);
