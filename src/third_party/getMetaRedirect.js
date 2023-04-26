/* MIT License

Copyright (c) 2018 Get Chalk

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

module.exports = function getMetaRedirect(toPath, pathPrefix, siteUrl) {

  const ci = process.env.CI;

  let url = toPath.replace(pathPrefix, "").trim();

  const hasProtocol = url.includes("://");
  if (!hasProtocol) {

    const hasLeadingSlash = url.startsWith("/");
    if (!hasLeadingSlash) {
      url = `/${url}`;
    }

    const resemblesFile = url.includes(".");
    if (!resemblesFile) {
    /*modified for GitHub Pages due to url handling, more info
    https://slorber.github.io/trailing-slash-guide/.
    original code:
    url = `${url}/`.replace(/\/\/+/g, '/');
    */
      url = ci
        ? url = `${url}`.replace(/\/\/+/g, "/")
        : url = `${url}/`.replace(/\/\/+/g, "/");
    }
  }

  const metaRefresh = `<meta http-equiv="refresh" content="0; URL='${pathPrefix}${url}'" />`;

  const metaCanonical =  `<link rel="canonical" href="${siteUrl}${url}" />`;

  return metaRefresh + metaCanonical;
};
