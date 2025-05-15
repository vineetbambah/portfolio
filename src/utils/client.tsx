import { Client } from "@notionhq/client";

export const notion = new Client({
    auth: process.env.NOTION_KEY,
  });
export const projectDb= process.env.NOTION_PAGE_ID_PROJECTS;
export const dumpDb = process.env.NOTION_PAGE_ID_DUMP;