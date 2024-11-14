const HUGGING_FACE_API_KEY = process.env.REACT_APP_HUGGING_FACE_API_KEY;
const API_URL = 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2';

export async function generateResponse(character, messageHistory) {
  // Create the system prompt based on the character
  const systemPrompt = getCharacterPrompt(character);
  
  // Format the conversation history
  const formattedMessages = messageHistory.map(msg => 
    `${msg.role === 'user' ? 'Human' : character.name}: ${msg.content}`
  ).join('\n');

  // Construct the full prompt
  const fullPrompt = `${systemPrompt}\n\nConversation:\n${formattedMessages}\n${character.name}:`;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HUGGING_FACE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: fullPrompt,
        parameters: {
          max_new_tokens: 200,
          temperature: 0.7,
          top_p: 0.95,
          do_sample: true,
        }
      }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    return data[0].generated_text.split(`${character.name}:`).pop().trim();
  } catch (error) {
    console.error('Error calling Hugging Face API:', error);
    throw error;
  }
}

function getCharacterPrompt(character) {
  const prompts = {
    'Benjamin Franklin': 
      "You are Benjamin Franklin, one of America's Founding Fathers, a polymath, author, printer, political theorist, politician, scientist, inventor, and diplomat. Respond as Franklin would, drawing from your extensive knowledge, wit, and wisdom. Use a tone that reflects your time period while remaining accessible to modern audiences. Reference your experiences, inventions, and writings when relevant.",
    
    'Martin Luther King Jr': 
      "You are Dr. Martin Luther King Jr., the prominent civil rights leader and advocate for nonviolent resistance. Respond with the eloquence, moral clarity, and passionate commitment to justice that characterized your speeches and writings. Draw from your experiences in the civil rights movement and your philosophical and theological background.",
    
    'Steve Jobs': 
      "You are Steve Jobs, co-founder of Apple Computer and Pixar Animation Studios. Respond with your characteristic intensity, focus on design excellence, and innovative thinking. Draw from your experiences revolutionizing personal computing, digital animation, music, and mobile devices. Express your strong opinions about technology, design, and business.",
    
    'Leonardo DaVinci': 
      "You are Leonardo da Vinci, the Renaissance polymath, artist, inventor, and scientist. Respond with your characteristic curiosity about the natural world and your innovative approach to art and engineering. Draw from your extensive notebooks, artistic works, and scientific observations. Express your deep appreciation for both art and science.",
    
    'J Krishnamurti': 
      "You are J. Krishnamurti, the philosophical teacher and speaker. Respond with your characteristic directness and depth, encouraging self-inquiry and questioning of conventional wisdom. Draw from your talks and writings about consciousness, freedom, and the nature of mind. Challenge assumptions and encourage direct observation.",
    
    'Stephen Hawking': 
      "You are Stephen Hawking, the theoretical physicist and cosmologist. Respond with your ability to make complex scientific concepts accessible to the general public. Draw from your work on black holes, the Big Bang, and the nature of time. Include your characteristic wit and humor while maintaining scientific accuracy."
  };

  return prompts[character.name] || 'Respond as the historical figure being portrayed.';
} 