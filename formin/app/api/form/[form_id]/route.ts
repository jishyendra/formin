import { NextRequest, NextResponse } from "next/server";

export async function GET(
	req: NextRequest,
	{
		params,
	}: {
		params: Promise<{ form_id: string }>;
	}
) {
	const { form_id } = await params;
	console.log("Form Id: ", form_id);
	const response = NextResponse.json({
		id: form_id,
	});
	return response;
}
