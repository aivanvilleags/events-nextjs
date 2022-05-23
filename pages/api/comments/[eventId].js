import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const { eventId } = req.query;

  const client = await MongoClient.connect(
    "mongodb+srv://nasa-api@cluster0.ow4vv.mongodb.net/events?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (!email || !name || !text) {
      return res.status(422).json({ message: "Invalid input" });
    }

    const comment = {
      eventId,
      email,
      name,
      text,
    };

    const db = client.db();

    const result = await db.collection("comments").insertOne(comment);

    console.log(result);

    res.status(201).json({ message: "Comment added", comment });
  }

  if (req.method === "GET") {
    const commentsList = [
      {
        id: "1",
        name: "Max",
        text: "Comment",
      },
    ];

    res.status(200).json({ comments: commentsList });
  }

  client.close();
}
