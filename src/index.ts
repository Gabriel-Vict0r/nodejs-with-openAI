import 'dotenv/config';
import OpenAI from "openai";


console.log(process.env.API_KEY);
const client = new OpenAI({
    apiKey: process.env.API_KEY,
    organization: process.env.ORGANIZATION
})
async function main() {
    const stream = await client.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Olá, pode responder a requisição?' }],
        stream: false
    })
}
main();