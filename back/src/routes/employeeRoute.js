const employeeRoute = ({ app, client }) => {
  app.get("/search/:indexParam", async (req, res) => {
    try {
      const {
        params: { indexParam },
      } = req;
      const { body } = await client.search({
        index: indexParam,
        size: 10,
      });

      res.send(body.hits.hits);
    } catch (error) {
      console.error(error);
      res.status(404).send("Data not found !");
    }
  });
};

export default employeeRoute;
