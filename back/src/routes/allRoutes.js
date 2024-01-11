import employeeRoute from "./employeeRoute.js";
import healthRoute from "./health.js";

const allRoutes = ({ app, client }) => {
  employeeRoute({ app, client });
  healthRoute({ app, client });
};

export default allRoutes;
