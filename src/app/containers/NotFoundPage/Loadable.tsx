/**
 * Asynchronously loads the component for NotFoundPage
 */

import { GridLoading } from "app/components/grid_loading/gridLoading"
import { lazyLoad } from "utils/loadable"

export const NotFoundPage = lazyLoad(
  () => import("./index"),
  (module) => module.NotFoundPage,
  {
    fallback: <GridLoading />,
  }
)
