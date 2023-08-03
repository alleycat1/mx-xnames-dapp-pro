/* --- STATE --- */
export interface SettingsPageState {
  isSaving: boolean
  linkedin: {
    isSaving: boolean
    isLoading: boolean
  }
}

export type ContainerState = SettingsPageState

export interface SaveChangesType {
  id?: number
  username?: string
  is_hide_dmns_for_other?: boolean
}
