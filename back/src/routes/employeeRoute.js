const employeeRoute = ({ app, client }) => {
  app.get("/search/:indexParam", async (req, res) => {
    // EX : http://{host}:{port}/search/employee?field=job&value=develo
    try {
      const {
        params: { indexParam },
        query: { field, value },
      } = req;

      const body = {
        query: {
          wildcard: {
            [field]: `*${value}*`,
          },
        },
        size: 10,
      };

      const { body: responseBody } = await client.search({
        index: indexParam,
        body,
      });

      const result = responseBody.hits.hits.map((item) => item._source);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(404).send("Data not found !");
    }
  });
};

export default employeeRoute;
