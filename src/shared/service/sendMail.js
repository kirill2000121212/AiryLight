export async function sendMail(url, requesData) {
  const { headers, method, body } = requesData;

  try {
    const response = await fetch(url, {
      headers,
      method,
      body,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error send mail");
  }
}
