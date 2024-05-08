import { addPhones } from "@/repos/phones"

export async function GET() {

    return new Response( )
        
    
    }
export async function POST(request) {
    const d= await request.json()

    return new Response(await addPhones(d),{status:200}  )
        
    
    }
export async function DELETE() {

    return new Response( )
        
    
    }