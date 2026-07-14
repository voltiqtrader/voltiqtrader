"use client";

export default function LoginButton() {
  return (
    <button
      onClick={() => alert("THIS IS THE REAL LOGIN BUTTON")}
      className="rounded-xl bg-red-600 px-8 py-4 text-white"
    >
      TEST LOGIN
    </button>
  );
}