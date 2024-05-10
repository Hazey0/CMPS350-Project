import { getStats } from "@/repos/stats"


export async function GET() {

    const res= await getStats()
    return Response.json(res,{status:200})    
    
    }
export async function POST() {

    return new Response(  )
        
    
    }
export async function DELETE() {

    return new Response(  )
        
    
    }