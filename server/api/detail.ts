import type { IncomingMessage, ServerResponse } from 'http'
import client from '~/server/api/client'
import { News } from '~/server/api/types'
import * as url from "url";

export default defineEventHandler( async (event:any) => {
    const params = getQuery(event)
    const slug = params.slug
    const data = client.getListDetail<News>({
        endpoint: 'projects',
        contentId: String(slug),
    })

    return data
})