export const getFilteredTasks = async (
  filterType: string,
  filterValue: string
) => {
  try {
    const response = await fetch(
      `https://66982bc302f3150fb67042ee.mockapi.io/taskApi/tasks?${filterType}=${filterValue}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data; // Ensure this is an array
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};
