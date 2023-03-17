# Description

The current version of `@capacitor/device@4.1.0` has an issue with the Firefox Browser (Version > 108) when using the method `getInfo()`, because of its use of `window.InstallTrigger`

# Reproduction

1. Install dependencies  and start
````
npm i
npm start
`````

2. Open `http://localhost:4200` in Mozilla Firefox with a version at least 109.
3. Check the developer console output

# Expected result

Like in Chrome or Edge the information for `webViewVersion` and `manufacturer` should be provided with real values

# Actual result

In Firefox `webViewVersion` returns `undefined` and `manufacturer` returns an empty string