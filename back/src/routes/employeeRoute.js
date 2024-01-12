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

      if (value === "" || !value) {
        res.send([]);
        return;
      }
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(404).send("Data not found !");
    }
  });

  app.post("/insert-data", async (req, res) => {
    const {
      body: { first_name, last_name, job, age },
    } = req;

    try {
      const body = [
        { index: { _index: "employee", _type: "_doc" } },
        {
          first_name: first_name,
          last_name: last_name,
          age: age,
          job: job,
        },
      ];
      client.bulk({ refresh: true, body });

      res.status(200).send(body);
    } catch (err) {
      res.status(401).send(err);
    }
  });
};

export default employeeRoute;
