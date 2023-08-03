import { TooltipText } from "app/components/TooltipText"
import { DomainPageSelectors } from "app/containers/DomainPage/selectors"
import { DomainPageActions } from "app/containers/DomainPage/slice"
import { useDispatch, useSelector } from "react-redux"
import { RegInfoItem } from "./InfoItem"
import { YearInput } from "./YearInput"

export const NumOfYears = () => {
  const dispatch = useDispatch()
  const yearCount = useSelector(DomainPageSelectors.registerDuration) || 1
  const handleDecrease = () => {
    dispatch(DomainPageActions.updateregisterDuration(yearCount - 1))
  }
  const handleIncrease = () => {
    dispatch(DomainPageActions.updateregisterDuration(yearCount + 1))
  }

  const text = (
    <TooltipText content="Registration Year" icon="fa-solid fa-circle-info" />
  )
  return (
    <RegInfoItem
      content={[
        text,
        <YearInput
          yearCount={yearCount}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />,
      ]}
    />
  )
}
