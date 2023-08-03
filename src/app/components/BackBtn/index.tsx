import { useHistory } from "react-router-dom"
import { Btn } from "./style"

const BackBtn = () => {
  const { goBack } = useHistory()

  return <Btn onClick={() => goBack()}>Back</Btn>
}

export default BackBtn
