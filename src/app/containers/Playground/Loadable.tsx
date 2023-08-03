/**
 *
 * Asynchronously loads the component for HomePage
 *
 */
import { lazyLoad } from "utils/loadable"
import { GridLoading } from "app/components/grid_loading/gridLoading"

export const Playground = lazyLoad(
  () => import("./index"),
  (module) => module.Playground,
  { fallback: <GridLoading /> }
)
