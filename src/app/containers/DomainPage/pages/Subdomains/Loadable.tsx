/**
 *
 * Asynchronously loads the component for Subdomains Domain
 *
 */
import { lazyLoad } from "utils/loadable"
import { GridLoading } from "app/components/grid_loading/gridLoading"

export const Subdomains = lazyLoad(
  () => import("./index"),
  (module) => module.Subdomains,
  { fallback: <GridLoading /> }
)
