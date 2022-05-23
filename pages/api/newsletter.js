import { MongoClient, ServerApiVersion } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    const uri =
      "mongodb+srv://nasa-api:@cluster0.ow4vv.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
      serverApi: ServerApiVersion.v1,
    });
    client.connect((err) => {
      const collection = client.db("newsletter").collection("emails");
      collection.insertOne({
        email,
      });
      client.close();
    });

    res.status(201).json({ message: "Signed up!" });
  }
}
