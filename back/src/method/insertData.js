const insertData = (client) => {
  const body = [
    { index: { _index: "employee", _type: "_doc" } },
    {
      first_name: "Nadir",
      last_name: "Mansouri",
      age: 23,
      job: "Developper",
    },
    { index: { _index: "employee", _type: "_doc" } },
    {
      first_name: "Lucas",
      last_name: "Dupont",
      age: 45,
      job: "RH",
    },
    { index: { _index: "employee", _type: "_doc" } },
    {
      first_name: "Jean",
      last_name: "Kway",
      age: 25,
      job: "Developper",
    },
    { index: { _index: "employee", _type: "_doc" } },
    {
      first_name: "Toto",
      last_name: "toto",
      age: 25,
      job: "CEO",
    },
    { index: { _index: "employee", _type: "_doc" } },
    {
      first_name: "Quentin",
      last_name: "Ma",
      age: 25,
      job: "Developper",
    },
    { index: { _index: "employee", _type: "_doc" } },
    {
      first_name: "Sami",
      last_name: "po",
      age: 25,
      job: "CTO",
    },
  ];
  client.bulk({ refresh: true, body });
};

export default insertData;
