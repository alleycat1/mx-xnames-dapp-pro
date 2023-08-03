/**
 *
 * Asynchronously loads the component for HomePage
 *
 */
import { lazyLoad } from "utils/loadable"
import { GridLoading } from "app/components/grid_loading/gridLoading"

export const HomePage = lazyLoad(
  () => import("./index"),
  (module) => module.HomePage,
  { fallback: <GridLoading /> }
)
