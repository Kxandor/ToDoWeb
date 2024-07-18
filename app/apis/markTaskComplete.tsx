import TaskCard from "../Components/TaskCard";
export const markTaskComplete = async (id: number) => {
  fetch(`https://66982bc302f3150fb67042ee.mockapi.io/tasks/${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ completed: true }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((apiTask) => {
      return <TaskCard task={apiTask} />;
    })
    .catch((error) => {});
};
