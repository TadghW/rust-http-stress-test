# MHT, a stress test for other people's websites

'Stress Test' written in Rust with Tokio and Reqwest, front end is written in vanilla JS with Tauri. You can find the system code in 'src-tauri/src'. The interface code is in 'src/' as the project is compiled with npm.

## How to run from source

1) Install required software:
- [Rust](https://www.rust-lang.org/tools/install) choosing [Nightly](https://doc.rust-lang.org/book/appendix-07-nightly-rust.html) as your default toolchain during the installation process
- [Node.js](https://nodejs.org/en/download)
- [npm](https://www.npmjs.com/)
- [Tauri](https://www.npmjs.com/package/@tauri-apps/cli)

2) Clone the repository into a local directory

3) Run `npm install` from your terminal at the root of the directory

4) Run `npm run tauri dev` from your terminal at the root of the directory


## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

Currently only tested on Windows 11-22H2 (22621.2861)
