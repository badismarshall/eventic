'use server'

import prisma from "@/app/api/dbConnect";

const OrderElement = prisma.order_element
export async function getOrderElementEventdate(orderementId: bigint, eventId: bigint) {
    const orderElement = await OrderElement.findUnique({
        select: {
            id: true,
            event_date_ticket: true
            
        },
        where: {
            id: orderementId

        }
    })

    return orderElement
    
}