export const postData = async (data: {}) => {
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
      console.log("Data were sent successfully");
      return res.json();
    } else {
      console.error("Failed to send data");
      throw new Error("Failed to send data");
    }
  } catch (error) {
    console.error("An error occurred while sending data", error);
    throw error;
  }
};
