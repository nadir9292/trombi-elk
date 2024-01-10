const insertData = (client) => {
  const body = [
    { index: { _index: "nadir", _type: "_doc" } },
    {
      first_name: "Nadir",
      last_name: "Mansouri",
      age: 23,
      job: "Developper",
    },
    { index: { _index: "lucas", _type: "_doc" } },
    {
      first_name: "Lucas",
      last_name: "Dupont",
      age: 45,
      job: "RH",
    },
    { index: { _index: "Jean", _type: "_doc" } },
    {
      first_name: "Jean",
      last_name: "Kway",
      age: 25,
      job: "Developper",
    },
  ];
  client.bulk({ refresh: true, body });
};

export default insertData;
