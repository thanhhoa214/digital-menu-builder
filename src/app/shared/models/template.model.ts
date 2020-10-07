export interface Template {
    id: number;
    description: string;
    storeId: number;
    createdTime: string;
    uilink: string;
    name: string;
}

export type Templates = Array<Template>;