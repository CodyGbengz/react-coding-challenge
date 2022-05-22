import { IResponse } from "src/@types/common";

async function apiGet<TData = any>(url: string): Promise<IResponse<TData>> {
  try {
    const response: any = await fetch(url);
    const { payload, success, error } = await response.json();
    return {
      payload,
      success,
      errors: error,
    };
  } catch (err: any) {
    return err;
  }
}

async function apiPut<T = unknown>(
  url: string,
  data?: Record<string, any>
): Promise<IResponse<T>> {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  try {
    const response: any = await fetch(url, requestOptions);
    const { payload, success, error } = await response.json();
    const dataToReturn: IResponse<T> = {
      success,
      payload,
      errors: error,
    };

    return dataToReturn;
  } catch (error: any) {
    return error;
  }
}

const baseURL = `http://localhost:8082/api`;

export async function getItems(): Promise<IResponse<IItem>> {
  return apiGet(`${baseURL}/items`);
}

export async function updateItem(data): Promise<IResponse<IItem>> {
  return apiPut(`${baseURL}/items/${data.id}`, { status: data.status });
}
