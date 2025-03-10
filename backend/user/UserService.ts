'use server'

import prisma from "@/app/api/dbConnect";

const User = prisma.user
const order_element = prisma.order_element

// get user by id
export async function getUserById(userId : bigint) {
    try {
        const user = await User.findUnique({
            where: {
                id: userId
            }
        })

        if(!user) {
            throw new Error("Error fetching user by id")
        }

        return user
    } catch (error) {
        throw new Error("Error in getUserByid")
    }
}

//get the 50 first users 
export async function getAllUsers() {
    try {
        const users = await User.findMany({ take: 50 })

        if(!users) {
            throw new Error("Error fetching all users")
        }

        return users
    } catch (error) {
        throw new Error("Error in getAllusers")
    }
}

// delete user by id
export async function deleteUserById(userId : bigint) {
    try {
        const user = User.delete({
            where: {
                id: userId
            }
        })

        if(!user) {
            throw new Error("Error deleting user")
        }

        return user
    } catch (error) {
        throw new Error("Error in deleteUserById")
    }
}

export async function hasUserBoughtATicketForEvent(userId : bigint, eventId: bigint) {
    try {
        const UserBoughtTicketdate = await order_element.count(
            {
                where: {
                    event_date_ticket: {
                        event_date: {
                            event_id: eventId
                        }
                    },
                    order: {
                        user_id: userId
                    }
                },
            }
        )
        if (UserBoughtTicketdate > 0) {
            return true
        }
        return false
    }   catch (error) {
        throw new Error("Error in hasUserBoughtATicketForEvent")
    }
}

export async function getUserRole(userId: bigint) {
    try {
        const role = await User.findUnique({
            select: {
                roles: true
            },
            where: {
                id: userId
            }
        })
        if (role?.roles == "ROLE_ATTENDEE") {
            return "Attendee"
        } else if (role?.roles == "ROLE_ORGANIZER") {
            return "Organizer"
        } else if (role?.roles == "ROLE_ADMIN" || role?.roles == "ROLE_SUPER_ADMIN") {
            return "Administrator"
        } else if (role?.roles == "ROLE_POINTOFSALE") {
            return "Point of Sale"
        } else if (role?.roles == "ROLE_SCANNER") {
            return "Scanner"
        } else {
            return "N/A"
        }
    } catch (error) {
        throw new Error("Error in getUserRole")
    }
}

