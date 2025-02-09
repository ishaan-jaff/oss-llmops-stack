# OSS LLMOps Stack

## Setup

1. Add OpenAI key to `docker-compose/litellm.env`
2. Run Stack
   ```bash
   cd docker-compose
   docker compose up
   ```
3. Make requests
   ```bash
   curl -X POST 'http://0.0.0.0:4000/chat/completions' \
       -H 'Content-Type: application/json' \
       -H 'Authorization: Bearer sk-1234' \
       -d '{
           "model": "o3-mini",
           "messages": [
           {
               "role": "system",
               "content": "You are a helpful math tutor. Guide the user through the solution step by step."
           },
           {
               "role": "user",
               "content": "how can I solve 8x + 7 = -23"
           }
           ]
       }'
   ```
4. See resulting traces in Langfuse on http://localhost:3000
   - Email: admin@example.com
   - Password: your-secure-password

## Edit Docs

Requirements: Node.js 20+, pnpm

```bash
cd docs
pnpm i
pnpm dev
```
