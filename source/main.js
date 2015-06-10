var React = require('react');
window.React = React;
var ReactRouter = require('react-router');
var {DefaultRoute, Route, RouteHandler} = ReactRouter;

var Page = require('./components/Page');

var routes = (
  <Route name='app' path='/' handler={RouteHandler}>
    <DefaultRoute name='events' handler={Page} />
  </Route>
);

ReactRouter.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
