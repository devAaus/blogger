import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { createAuthor } from '@/actions/author-actions'

export async function POST(req: Request) {
   const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

   if (!WEBHOOK_SECRET) {
      throw new Error('Error: Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
   }

   // Create new Svix instance with secret
   const wh = new Webhook(WEBHOOK_SECRET)

   // Get headers
   const headerPayload = await headers()
   const svix_id = headerPayload.get('svix-id')
   const svix_timestamp = headerPayload.get('svix-timestamp')
   const svix_signature = headerPayload.get('svix-signature')

   // If there are no headers, error out
   if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response('Error: Missing Svix headers', {
         status: 400,
      })
   }

   // Get body
   const payload = await req.json()
   const body = JSON.stringify(payload)

   let evt: WebhookEvent

   // Verify payload with headers
   try {
      evt = wh.verify(body, {
         'svix-id': svix_id,
         'svix-timestamp': svix_timestamp,
         'svix-signature': svix_signature,
      }) as WebhookEvent
   } catch (err) {
      console.error('Error: Could not verify webhook:', err)
      return new Response('Error: Verification error', {
         status: 400,
      })
   }

   // Do something with payload
   // For this guide, log payload to console
   const { id } = evt.data
   const eventType = evt.type

   if (eventType === 'user.created') {
      const {
         id,
         email_addresses,
         image_url,
         first_name,
         last_name,
         username
      } = evt.data

      const user = {
         clerkId: id,
         email: email_addresses[0]?.email_address ?? '',
         firstName: first_name ?? '',
         lastName: last_name ?? '',
         userName: username ?? '',
         avatar: image_url
      }

      const newUser = await createAuthor(user);

   }

   return new Response('Webhook received', { status: 200 })
}