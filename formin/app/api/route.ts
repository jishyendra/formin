import { NextResponse } from "next/server";

export async function GET() {
	const response = NextResponse.json({
		message: "Welcome to formin API",
		status: "success",
	});
	return response;
}