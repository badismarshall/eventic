'use server'

import prisma from "@/app/api/dbConnect";

const Order = prisma.order

// export async function orderContainsEvent(orderId: bigint, eventId: bigint) {

// }

// get order by id
export async function getOrderById(orderId : bigint) {
    try  {
        const order = await Order.findUnique({
            where: {
                id: orderId
            }
        })

        if(!order) {
            throw new Error("Error in getUserRole")
        }

        return order
    } catch(error) {
        throw new Error("Error in getOrderById")
    }
}

//get the 50 first orders
export async function getAllOrders() {
    try {
        const orders = await Order.findMany({ take: 50 })

        if(!orders) {
            throw new Error("Error in getUserRole")
        }

        return orders
    } catch(error) {
        throw new Error("Error in getAllOrders")
    }
}

// delete order by id
export async function deleteOrderById(orderId : bigint) {
    try {  
        const order = await Order.delete({
            where:{
                id: orderId
            }
        })

        if(!order) {
            throw new Error("Error in deleteOrderById")
        }

        return order
    } catch(error) {
        throw new Error("Error in deleteOrderById")
    }
}

// get orders by user
export async function getOrdersByUser(userId : bigint) {
    try {
        const orders  = await Order.findMany({
            where: {
                user_id: userId
            }
        })

        if(!orders) {
            throw new Error("Error getting orders by User")
        }

        return orders
    } catch (error) {
        throw new Error("Error in getOrdersByUser")
    }
}