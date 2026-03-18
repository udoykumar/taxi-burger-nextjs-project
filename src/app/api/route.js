const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
export const feedback = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@gmail.com",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "Hello World",
  });
}
