import { Wrapper } from "./wrapper"

const GridLoading = (props) => {
  return (
    <Wrapper {...props}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  )
}
export { GridLoading }
