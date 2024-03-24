import { useCallback, useEffect, useState } from "react";

export const useFetch = <T>(
  fetcher: () => Promise<T>,
  deps?: unknown[],
  initialValue: T | null = null
) => {
  const [data, setData] = useState(initialValue);
  const [status, setStatus] = useState<
    "loading" | "error" | "success" | "idle"
  >("idle");
  const [error, setError] = useState<unknown | null>(null);

  const _fetcher = useCallback(fetcher, deps ?? []);

  useEffect(() => {
    (async () => {
      try {
        setStatus("loading");
        const res = await _fetcher();
        setData(res);
        setStatus("success");
      } catch (err) {
        setStatus("error");
        setError(error);
      }
    })();
  }, [_fetcher, error]);
  return { status, data, error };
};