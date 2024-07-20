export const getTaskById = async (id: number) => {
  try {
    const res = await fetch(
      `https://66982bc302f3150fb67042ee.mockapi.io/taskApi/tasks/${id}`
    );
    if (!res.ok) {
      console.error("Failed to fetch data");
      throw new Error("Failed to fetch data");
    }
    const task = await res.json();
    return task;
  } catch (error) {
    console.error("An error occurred while fetching data", error);
    throw error;
  }
};
