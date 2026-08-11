import { NextResponse } from "next/server";
import { fetchVimeoLibrary } from "@/lib/vimeo";

// Thin client-facing wrapper around the shared Vimeo fetch/categorise logic
// in src/lib/vimeo.ts — see that file for how tags map to category tabs.

export async function GET() {
  try {
    const items = await fetchVimeoLibrary();
    return NextResponse.json(
      { items, updatedAt: new Date().toISOString() },
      { headers: { "Cache-Control": "s-maxage=900, stale-while-revalidate=3600" } }
    );
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to fetch Vimeo library." },
      { status: 502 }
    );
  }
}
