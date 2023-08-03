/**
 *
 * Asynchronously loads the component for MyAccountPage
 *
 */
import { lazyLoad } from "utils/loadable"
import { GridLoading } from "app/components/grid_loading/gridLoading"

export const MyAccountPage = lazyLoad(
  () => import("./index"),
  (module) => module.MyAccountPage,
  { fallback: <GridLoading /> }
)
