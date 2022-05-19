interface IPaginationPayload<T, F> {
    data: T[];
    facets: F;
    pagination: IPagination;
}

interface ILabelValue {
    label: string;
    value: string | number;
    disabled?: boolean;
}

interface IPaginationResponse<T, F> {
    success: boolean;
    payload: IPaginationPayload<T, F>;
    errors: string[];
}

interface ISimplePaginationPayload<T> {
    data: T;
    pagination: IPagination;
}

interface ISimplePaginationResponse<T> {
    success: boolean;
    payload: ISimplePaginationPayload<T>;
    errors: string[];
}

interface IResponse<T> {
    success: boolean;
    payload: T;
    errors: string[];
}

interface IDataPayload<T> {
    data: T;
}

interface IPagination {
    count: number;
    items: number;
    outset: number;
    page: number;
    last: number;
    pages: number;
    offset: number;
    from: number;
    to: number;
    prev: number | null;
    next: number | null;
}
