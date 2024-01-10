const employeeRoute = ({ app }) => {
  app.get("/employees", async (req, res) => {
    // TODO add call to ESearch
    res.send([]);
  });
};

export default employeeRoute;
