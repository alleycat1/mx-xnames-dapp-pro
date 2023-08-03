/**
 *
 * Asynchronously loads the component for Register Domain
 *
 */
import { lazyLoad } from "utils/loadable"
import { GridLoading } from "app/components/grid_loading/gridLoading"

export const Register = lazyLoad(
  () => import("./index"),
  (module) => module.Register,
  { fallback: <GridLoading /> }
)
