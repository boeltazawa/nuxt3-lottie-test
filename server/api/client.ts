import { createClient } from 'microcms-js-sdk'; //ES6

const config = useRuntimeConfig();

const client = createClient({
    serviceDomain: config.MICROCMS_SERVICE_DOMAIN,
    apiKey: config.MICROCMS_API_KEY,
    retry: true
});

export default client