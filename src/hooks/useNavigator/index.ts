import { push } from "connected-react-router"
import { useDispatch } from "react-redux"

export const useNavigator = () => {
  const dispatch = useDispatch()

  const navigate = (to: string) => {
    dispatch(push(to))
  }

  return navigate
}
