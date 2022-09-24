const applePlatforms = ['macOS', 'iOS', 'iPadOS']

// As of 09/24/22, the `userAgentData` Navigator API is currently not available on Safari.
// https://caniuse.com/mdn-api_navigator_useragentdata
export const isApplePlatform =
  (isUserAgentDataPlatformAvailable() &&
    navigator.userAgentData?.platform &&
    applePlatforms.includes(navigator.userAgentData.platform)) ||
  (typeof navigator === 'object' && /Mac|iPad|iPhone|iPod/.test(navigator.platform))

function isUserAgentDataPlatformAvailable(): boolean {
  return typeof navigator === 'object' && !!navigator.userAgentData && !!navigator.userAgentData.platform
}
