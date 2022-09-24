// https://wicg.github.io/ua-client-hints/#dictdef-uadatavalues
interface Navigator {
  userAgentData?: {
    brands: string[]
    mobile: boolean
    architecture: string
    bitness: string
    model: string
    platform: string
    platformVersion: string
    uaFullVersion: string
    wow64: boolean
    fullVersionList: {
      brand: string
      version: string
    }[]
  }
}
