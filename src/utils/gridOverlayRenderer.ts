import ReactDOMServer from "react-dom/server"

export const renderOverlay = (children) => {
  return ReactDOMServer.renderToString(children)
}
