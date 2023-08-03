/**
 *
 * Asynchronously loads the component for SettingsPage
 *
 */
import React from "react"
import { lazyLoad } from "utils/loadable"
import { GridLoading } from "app/components/grid_loading/gridLoading"

export const SettingsPage = lazyLoad(
  () => import("./index"),
  (module) => module.SettingsPage,
  { fallback: <GridLoading /> }
)
