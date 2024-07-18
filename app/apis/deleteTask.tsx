export const deleteTask = async (id: number) => {
  fetch(`https://66982bc302f3150fb67042ee.mockapi.io/taskApi/tasks/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((task) => {
      // Do something with deleted task
    })
    .catch((error) => {
      // handle error
    });
};
