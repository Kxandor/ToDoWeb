export const postData = async (data: any) => {
  try {
    const res = await fetch(
      "https://66982bc302f3150fb67042ee.mockapi.io/taskApi/tasks",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (res.ok) {
      console.log("Data was sent successfully");
      const task = await res.json();
      console.log(task);
    } else {
      console.error("Failed to send data");
    }
  } catch (error) {
    console.error("An error occurred while sending data", error);
  }
};
