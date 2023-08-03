/**
 *
 * Asynchronously loads the component for Details Domain
 *
 */
import { lazyLoad } from "utils/loadable"
import { GridLoading } from "app/components/grid_loading/gridLoading"

export const Details = lazyLoad(
  () => import("./index"),
  (module) => module.Details,
  { fallback: <GridLoading /> }
)
