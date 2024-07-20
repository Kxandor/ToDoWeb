export const updateDatabase = async (
  id: number,
  updatedTask: {
    taskName: string;
    taskDescription: string;
    tag: string;
    priority: boolean;
    location: string;
  }
) => {
  try {
    const res = await fetch(
      `https://66982bc302f3150fb67042ee.mockapi.io/taskApi/tasks/${id}`,
      {
        method: "PUT", // or PATCH
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to update task");
    }

    const task = await res.json();
    return task;
  } catch (error) {
    console.error("An error occurred while updating the task", error);
    throw error;
  }
};
