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
                "url": "https://files.microcms-assets.io/assets/674735be22c34bbcad1160ec58fd276c/9fb7cb5abd534180a6392024e7bfb044/tomamu-wedding.json"
            }
        }
    }

    return data
})