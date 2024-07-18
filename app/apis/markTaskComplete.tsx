export const markTaskComplete = async (id: number) => {
  fetch(`https://66982bc302f3150fb67042ee.mockapi.io/tasks/${id}`, {
    method: "PUT", // or PATCH
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ completed: true }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((task) => {
      // Do something with updated task
    })
    .catch((error) => {
      // handle error
    });
};
