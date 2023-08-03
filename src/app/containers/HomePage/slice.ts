import { PayloadAction } from "@reduxjs/toolkit"
import { notSupportedCharacters, PageableParams } from "app/constants"
import { DomainsType, DomainType, PageableInterface } from "app/types"
import { createSlice } from "utils/@reduxjs/toolkit"
import { addTrailingCCD, byteSize } from "utils/commonUtils"
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors"
import { homePageSaga } from "./saga"
import { ContainerState, DomainsOptionsType } from "./types"

// The initial state of the HomePage container
export const initialState: ContainerState = {
  domains: undefined,
  isLoadingDomains: false,
  searchedDomain: undefined,
  searchValue: "",
  searchText: "",
  total: 0,
  selectedPage: PageableParams.page,
  filterValue: "Ongoing auctions",
  errorValue: false,
  helperText: "",
}

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setIsLoadingDomains(state, action: PayloadAction<boolean>) {
      state.isLoadingDomains = action.payload
    },
    getDomains(_, action: PayloadAction<undefined>) {},
    setDomains(state, action: PayloadAction<DomainsType | any>) {
      state.domains = action.payload
    },
    search(state, action: PayloadAction<string>) {},
    setSearchedDomain(state, action: PayloadAction<DomainType | undefined>) {
      state.searchedDomain = action.payload
    },
    setSearchValue(state, action: PayloadAction<string>) {
      const domainName: string = action.payload?.toLowerCase()

      const isRightDomainName = notSupportedCharacters.some((char) =>
        domainName.includes(char)
      )

      if (isRightDomainName) {
        state.errorValue = true
        state.helperText = `Special characters such as (${notSupportedCharacters.join(
          ", "
        )}) and spaces are not supported.`
      } else {
        const domainByteSize = byteSize(domainName)

        if (domainByteSize > 64) {
          state.helperText =
            "Domain name too long. Domain characters exceed max size of 64bytes."
          state.errorValue = true
          state.searchValue = ""
        } else {
          state.errorValue = false
          state.searchValue = domainName
        }
        state.searchText = domainName
        state.selectedPage = 1
      }
    },
    setTotal(state, action: PayloadAction<number>) {
      state.total = action.payload
    },
    setSelectedPage(state, action: PayloadAction<number>) {
      state.selectedPage = action.payload
    },
    setFilterValue(state, action: PayloadAction<DomainsOptionsType>) {
      state.filterValue = action.payload
    },
  },
})

export const {
  actions: HomePageActions,
  reducer: HomePageReducer,
  name: sliceKey,
} = homePageSlice

export const useHomePageSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: HomePageReducer })
  useInjectSaga({ key: sliceKey, saga: homePageSaga })

  return { homePageSlice }
}
