import { useSearchParams } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    
    console.log(req.url)
    const searchParams = useSearchParams();
    const utm_medium = searchParams.get("utm_medium");
    console.log(utm_medium)


    return NextResponse.redirect(
		"https://apps.apple.com/"
	);
    // return NextResponse.redirect(
	// 	"https://apps.apple.com/us/app/your-app-name/id123456789"
	// );
}
