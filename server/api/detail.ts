import type { IncomingMessage, ServerResponse } from 'http'

export default defineEventHandler( async (event:any) => {
    const data = {
        "subject": {
            "fieldId": "title",
            "isTitleAnimation": true,
            "lang": [
                "英語"
            ],
            "animationData": {
                "url": "https://files.microcms-assets.io/assets/674735be22c34bbcad1160ec58fd276c/f404ec5aa0d24e7e957ad6b495519919/boel.json"
            }
        }
    }

    return data
})