import { TabsProps } from "app/components/Tabs"
import { MappingDetails } from "./pages/Details"
import { TextRecords } from "./pages/TextRecords"

export const tabs: TabsProps = {
  selectedTab: { value: "", label: "" },
  list: [
    { value: 0, label: "Domain Details" },
    { value: 1, label: "Text Records" },
    { value: 2, label: "Offers" },
    { value: 3, label: "Sub domains" },
    { value: 4, label: "Domain Activity" },
    { value: 5, label: "Price History" },
  ],
}

export const MappingPages = [MappingDetails, TextRecords]
