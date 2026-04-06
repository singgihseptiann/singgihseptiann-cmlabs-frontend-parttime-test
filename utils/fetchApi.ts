// lib/fetchApi.ts
type FetchConfig = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: unknown;
  headers?: Record<string, string>;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

type FetchApiResponse<T> = {
  data: T;
  status: number;
  statusText: string;
};

export async function fetchApi<T = any>(url: string, config?: FetchConfig): Promise<FetchApiResponse<T>> {
  const { body, headers, method = "GET", cache, next } = config ?? {};

  const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json", ...headers },
    body: body ? JSON.stringify(body) : undefined,
    cache,
    next,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const data = (await response.json()) as T;

  return {
    data,
    status: response.status,
    statusText: response.statusText,
  };
}
