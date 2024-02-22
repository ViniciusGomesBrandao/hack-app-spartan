// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::process::Command;
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

#[tauri::command]
fn greet(command: String) -> String {
    return "Test Command".to_string();
}

#[tauri::command]
fn exec_command(command: &str) -> String {
    use std::string::String;
    use std::process::Command;
    let output = if cfg!(target_os = "windows") {
        Command::new("cmd")
            .args(["/C", command])
            .output()
            .expect("failed to execute process")
    } else {
        Command::new("sh")
            .arg("-c")
            .arg(command)
            .output()
            .expect("failed to execute process")
    };

    let hello = String::from_utf8_lossy(&output.stdout).to_string();
    return hello;
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, exec_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
