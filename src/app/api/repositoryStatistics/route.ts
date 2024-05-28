// NextResponse
import { NextResponse } from "next/server";

// GET
export async function GET(request: Request) {
  // Response
  const response = await fetch(
    `https://api.github.com/repos/${request.headers.get(
      "owner"
    )}/${request.headers.get("repo")}`,
    {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // Data
  const data = await response.json();

  return NextResponse.json(data);
}
