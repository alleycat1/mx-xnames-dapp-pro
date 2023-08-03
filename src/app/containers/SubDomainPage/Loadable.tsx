/**
 *
 * Asynchronously loads the component for SubDomainPage
 *
 */
import React from "react"
import { lazyLoad } from "utils/loadable"
import { GridLoading } from "app/components/grid_loading/gridLoading"

export const SubDomainPage = lazyLoad(
  () => import("./index"),
  (module) => module.SubDomainPage,
  { fallback: <GridLoading /> }
)
