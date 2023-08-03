/**
 *
 * Asynchronously loads the component for DomainPage
 *
 */

import { lazyLoad } from "utils/loadable"
import { GridLoading } from "app/components/grid_loading/gridLoading"

export const DomainPage = lazyLoad(
  () => import("./index"),
  (module) => module.DomainPage,
  { fallback: <GridLoading /> }
)
