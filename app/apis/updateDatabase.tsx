export const updateDatabase = async (
  id: number,
  type: string,
  value: boolean | string
) => {
  fetch(`https://66982bc302f3150fb67042ee.mockapi.io/tasks/${id}`, {
    method: "PUT", // or PATCH
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ type: value }),
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
