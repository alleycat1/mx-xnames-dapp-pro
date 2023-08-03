import useSWR, { Key } from "swr"
import { BareFetcher, PublicConfiguration } from "swr/_internal"

export const useSWRLocal = <Datatype = any>(
  key: Key,
  config?: Partial<PublicConfiguration<Datatype, any, BareFetcher<Datatype>>>
) => {
  return useSWR<Datatype>(key, {
    revalidateOnMount: false,
    errorRetryCount: 0,
    onError: () => {},
    onErrorRetry: () => {},
    shouldRetryOnError: false,
    ...config,
  })
}
