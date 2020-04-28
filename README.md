# stdio redirector

[![Build Status (Windows)][image-build-windows]][link-build-windows]
[![Build Status (macOS)][image-build-macos]][link-build-macos]
[![Build Status (Linux)][image-build-linux]][link-build-linux]
[![Release][image-release]][link-release]
[![Node.js version][image-engine]][link-engine]
[![License][image-license]][link-license]

CLI tools for stdio redirection

## Install

```bash
npm i -g stdio-redirector
```

## Examples

```bash
# equivalent to "command <file"
file-to-stdin file command
```

```bash
# equivalent to "command >file"
# directories will be created if not exists
stdout-to-file file command
```

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

[image-build-windows]: https://github.com/shimataro/stdio-redirector/workflows/Windows/badge.svg
[link-build-windows]: https://github.com/shimataro/stdio-redirector/actions?query=workflow%3AWindows
[image-build-macos]: https://github.com/shimataro/stdio-redirector/workflows/macOS/badge.svg
[link-build-macos]: https://github.com/shimataro/stdio-redirector/actions?query=workflow%3AmacOS
[image-build-linux]: https://github.com/shimataro/stdio-redirector/workflows/Linux/badge.svg
[link-build-linux]: https://github.com/shimataro/stdio-redirector/actions?query=workflow%3ALinux
[image-code-coverage]: https://img.shields.io/codecov/c/github/shimataro/stdio-redirector/develop.svg
[link-code-coverage]: https://codecov.io/gh/shimataro/stdio-redirector
[image-release]: https://img.shields.io/github/release/shimataro/stdio-redirector.svg
[link-release]: https://github.com/shimataro/stdio-redirector/releases
[image-engine]: https://img.shields.io/node/v/@shimataro/stdio-redirector.svg
[link-engine]: https://nodejs.org/
[image-license]: https://img.shields.io/github/license/shimataro/stdio-redirector.svg
[link-license]: ./LICENSE
