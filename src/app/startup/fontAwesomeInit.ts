import { library } from "@fortawesome/fontawesome-svg-core"

import {
  faHeart,
  faTicket,
  faGift,
  faMoneyCheckDollar,
  faCircleCheck,
  faPlus,
  faMinus,
  faHouse,
  faQuestion,
  faLayerGroup,
  faStore,
  faUser,
  faListUl,
  faGrid,
  faBars,
  faCircle3,
  faCircleInfo,
  faXmark,
  faChevronDown,
} from "@fortawesome/pro-solid-svg-icons"

import {
  faHeart as farHeart,
  faShieldExclamation,
  faSquareArrowUpRight,
  faStar,
  faHourglass,
  faChartLineUp,
  faCartShopping,
  faSend,
  faMoneyBills,
  faArrowsRotate,
  faMagnifyingGlass,
  faFilters,
  faCircleInfo as farCircleInfo,
} from "@fortawesome/pro-regular-svg-icons"

import { faTrash } from "@fortawesome/pro-light-svg-icons"

// import { faMoneyBills } from "@fortawesome/pro-thin-svg-icons"

// import {} from "@fortawesome/pro-duotone-svg-icons"
// import {} from "@fortawesome/pro-light-svg-icons"
// import {} from "@fortawesome/sharp-light-svg-icons"
// import {} from "@fortawesome/sharp-regular-svg-icons"
// import {} from "@fortawesome/sharp-solid-svg-icons"

export const initializeFAIcons = () => {
  library.add(
    faCircle3,
    faCircleCheck,
    faCartShopping,
    faSend,
    faTicket,
    faMoneyCheckDollar,
    faGift,
    faHourglass,
    faChartLineUp,
    faHeart,
    farHeart,
    faShieldExclamation,
    faStar,
    faSquareArrowUpRight,
    faMoneyBills,
    faTrash,
    faArrowsRotate,
    faMagnifyingGlass,
    faCircleInfo,
    faPlus,
    faMinus,
    faFilters,
    faHouse,
    faQuestion,
    faLayerGroup,
    faStore,
    faUser,
    faListUl,
    faGrid,
    faBars,
    faXmark,
    faChevronDown,
    farCircleInfo
  )
}
