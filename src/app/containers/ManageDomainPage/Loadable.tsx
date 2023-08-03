/**
 *
 * Asynchronously loads the component for MarketPlacePage
 *
 */
import React from "react"
import { lazyLoad } from "utils/loadable"
import { GridLoading } from "app/components/grid_loading/gridLoading"

export const ManageDomainPage = lazyLoad(
  () => import("./index"),
  (module) => module.ManageDomainPage,
  { fallback: <GridLoading /> }
)
