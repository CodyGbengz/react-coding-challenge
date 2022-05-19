type TItemStatus = "new" | "processing" | "done" | "error";

interface IItem {
    id: number;
    name: string;
    status: TItemStatus;
    image: string | null;
}
