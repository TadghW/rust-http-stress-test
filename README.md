# MHT, a stress test for other people's websites

'Stress Test' written in Rust with Tokio and Reqwest, front end is written in vanilla JS with Tauri. You can find the system code in 'src-tauri/src'. The interface code is in 'src/' as the project is compiled with npm.

## How to build
1) Clone the repo into a local directory

2) Install:
[Rust Nightly](https://doc.rust-lang.org/book/appendix-07-nightly-rust.html)
[npm](https://www.npmjs.com/)
and
[Tauri](https://www.npmjs.com/package/@tauri-apps/cli)

3) Inside the directory run:
`npm run tauri dev`


## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

Currently only tested on Windows 11-22H2 (22621.2861)
