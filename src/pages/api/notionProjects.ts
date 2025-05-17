import { notion } from "@/utils/client";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PAGE_ID_PROJECTS!,
    });

    res.status(200).json(response.results);
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}