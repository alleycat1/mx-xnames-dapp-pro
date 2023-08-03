import { FC, useLayoutEffect } from "react"
import bwipjs from "bwip-js"

const prps = {
  width: 1,
  height: 30,
  displayValue: false,
  background: "#ffffff",
  lineColor: "#000000",
  margin: 10,
  padding: 10,
  right: 0,
  marginTop: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
  marginRight: undefined,
}

interface BarcodeProps {
  text: string
}

export const Barcode: FC<BarcodeProps> = ({ text }) => {
  useLayoutEffect(() => {
    bwipjs.toCanvas(text, {
      bcid: "code128", // Barcode type
      text, // Text to encode
      scale: 1.5, // 3x scaling factor
      height: 5, // Bar height, in millimeters
      includetext: false, // Show human-readable text
      textxalign: "center", // Always good to set this
    })
    return () => {}
  }, [])
  return <canvas id={text}></canvas>
}
