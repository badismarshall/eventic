'use server'

import prisma from "@/app/api/dbConnect";

const Event = prisma.event

// get the event by id
export async function getEventById(eventId : bigint) {
    try {
        const event = await Event.findUnique({
            where: {
                id: eventId
            }
        })

        if (!event) {
            throw new Error('Event not found')
        }
        return event

    } catch (error) {
        throw new Error("Error in getEventById") 
    }
}

// get the 50 first events
export async function getAllEvents() {
    try {
        const events = await Event.findMany({ take: 50 })

        if(!events) {
            throw new Error('Error fetching Events')
        }

        return events
    } catch (error) {
        throw new Error("Error in getAllEvents")
    }
}

// add event
export async function addEvent () {
    try {

    } catch (error) {
        throw new Error("Error in addEvent")
    }
}

// delete an event by id
export async function deleteEventById( eventId : bigint) {
    try {
        const event = await Event.delete({
            where: {
                id: eventId
            }
        })

        if(!event) {
            throw new Error("Error deleting event")
        }

        return event
    } catch (error) {
        throw new Error("Error in deleteEventById")
    }
}

// get events by organizer
export async function getEventsByOrgnizer(organizerId : bigint) {
    try {
        const event = await Event.findMany({
            where:{
                organizer_id: organizerId
            }
        })

        if(!event) {
            throw new Error("Error getting event by organizer")
        }

        return event
    } catch (error) {
        throw new Error("Error in getEventsByOrgnizer")
    }
}

// get events by category
export async function getEventsByCategory(categoryId : bigint) {
    try {
        const event = await Event.findMany({
            where: {
                category_id: categoryId  
            }
        })

        if(!event) {
            throw new Error("Error getting event by category")
        }

        return event
    } catch (error) {
        throw new Error("Error in getEventByCategory")
    }
}



