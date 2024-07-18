export const getData = async () => {
  try {
    const response = await fetch(
      "https://66982bc302f3150fb67042ee.mockapi.io/taskApi/tasks",
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );
    if (response.ok) {
      const tasks = await response.json();
      return tasks;

      // Do something with the list of tasks
    } else {
      // handle error
    }
  } catch (error) {
    // handle error
  }
};
