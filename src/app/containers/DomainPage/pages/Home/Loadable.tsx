/**
 *
 * Asynchronously loads the component for Auction Domain
 *
 */
import { lazyLoad } from "utils/loadable"
import { GridLoading } from "app/components/grid_loading/gridLoading"

export const Home = lazyLoad(
  () => import("./index"),
  (module) => module.Home,
  { fallback: <GridLoading /> }
)
