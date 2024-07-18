export const deleteTask = async (id: number, fun: any, tasks: object[]) => {
  fetch(`https://66982bc302f3150fb67042ee.mockapi.io/taskApi/tasks/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((apiTask) => {
      const newList = tasks.filter((task: any) => task.id != apiTask.id);
      fun(newList);
    })
    .catch((error) => {});
};
