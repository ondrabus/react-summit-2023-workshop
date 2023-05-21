import { createDeliveryClient } from "@kontent-ai/delivery-sdk";

export const deliveryClient = createDeliveryClient({
    environmentId: import.meta.env.KONTENT_PROJECT_ID
})