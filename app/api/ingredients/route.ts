import { searchIngredients } from "@/utils/searchService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const offset = parseInt(searchParams.get("offset") || "0");
  const query = searchParams.get("q") || undefined;

  try {
    console.log(`[API] Fetching ingredients with offset=${offset}, query=${query}`);
    const result = await searchIngredients(query, offset);

    console.log(`[API] Successfully fetched ${result.ingredients.length} ingredients`);

    // Ensure result has the correct structure
    return NextResponse.json({
      ingredients: Array.isArray(result.ingredients) ? result.ingredients : [],
      hasMore: result.hasMore ?? false,
      total: result.total ?? 0,
    });
  } catch (error) {
    console.error("[API] Error fetching ingredients:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        error: `Failed to fetch ingredients: ${errorMessage}`,
        ingredients: [],
        hasMore: false,
        total: 0,
      },
      { status: 500 },
    );
  }
}
