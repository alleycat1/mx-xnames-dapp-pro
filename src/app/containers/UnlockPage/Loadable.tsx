/**
 *
 * Asynchronously loads the component for Unlock
 *
 */
import React from "react"
import { lazyLoad } from "utils/loadable"
import { GridLoading } from "app/components/grid_loading/gridLoading"

export const Unlock = lazyLoad(
  () => import("./index"),
  (module) => module.UnlockPage,
  { fallback: <GridLoading /> }
)
