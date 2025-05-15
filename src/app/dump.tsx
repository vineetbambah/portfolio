import { notion } from "@/utils/client";
const fetchDump = async () => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_PAGE_ID_DUMP|| "",
    });
    return response.results;
}
console.log("Dump data fetched from Notion:", fetchDump);
const Dump = () => {
    return (
        <div className="p-4">
            <ul className="list-disc pl-5">
                <li>Random thought 1</li>
                <li>Random thought 2</li>
                <li>Random thought 3</li>
            </ul>
        </div>
    );
}
export default Dump;