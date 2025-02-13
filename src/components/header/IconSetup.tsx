import { ReactElement } from "react"

const IconSetup = (source: string | undefined, altText: string | undefined) : ReactElement => {
  return (
    <img src={source} alt={altText} />
  )
}

export default IconSetup