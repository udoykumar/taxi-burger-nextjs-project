import { feedback } from "../../route";

export async function GET(request, { params }) {
  const { id } = await params;
  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: "send correct _id",
    });
  }
  const query = { _id: new ObjectId(id) };
  const singleFeedback = await feedback.findOne(query);
  return Response.json(singleFeedback);
}
export async function POST(request, { params }) {
  const { id } = await params;
  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: "send correct _id",
    });
  }
  const query = { _id: new ObjectId(id) };
  const singleFeedback = await feedback.findOne(query);
  return Response.json(singleFeedback);
}
export async function DELETE(request, { params }) {
  const { id } = await params;
  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: "send correct _id",
    });
  }
  const query = { _id: new ObjectId(id) };
  const singleFeedback = await feedback.deleteOne(query);
  return Response.json(singleFeedback);
}
export async function PATCH(request, { params }) {
  const { id } = await params;
  const { message } = await request.json();
  if (id.length !== 24) {
    return Response.json({
      status: 400,
      message: "send correct _id",
    });
  }
  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "Please send message",
    });
  }
  const query = { _id: new ObjectId(id) };
  const newData = { $set: { message } };
  const singleFeedback = await feedback.updateOne(query, newData);
  return Response.json(singleFeedback);
}
