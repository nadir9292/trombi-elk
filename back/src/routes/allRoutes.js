import employeeRoute from "./employeeRoute.js";
import healthRoute from "./health.js";

const allRoutes = ({ app }) => {
  employeeRoute({ app });
  healthRoute({ app });
};

export default allRoutes;
