/**
 *
 * Asynchronously loads the component for Components
 *
 */
import React from "react"
import { lazyLoad } from "utils/loadable"
import { GridLoading } from "app/components/grid_loading/gridLoading"

export const Components = lazyLoad(
  () => import("./index"),
  (module) => module.Components,
  { fallback: <GridLoading /> }
)
