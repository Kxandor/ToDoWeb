export const getData = async (func: any) => {
  const response = await fetch(
    "https://66982bc302f3150fb67042ee.mockapi.io/taskApi/tasks",
    {
      method: "GET",
      headers: { "content-type": "application/json" },
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((tasks) => {
      func(tasks);
      console.log(tasks);
    })
    .catch((error) => {
      console.log();
    });
};
