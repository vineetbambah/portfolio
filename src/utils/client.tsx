import { Client } from "@notionhq/client";

export const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
export const databaseId = process.env.NOTION_DATABASE_ID;
export const notionKey = process.env.NOTION_KEY;