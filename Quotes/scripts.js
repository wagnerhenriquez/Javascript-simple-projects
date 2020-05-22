const quotes = [
    {
        name: 'Nelson Mandela',
        quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall.".'
    },
    {
        name: 'Walt Disney',
        quote: '"The way to get started is to quit talking and begin doing."'
    },
    {
        name: 'Nelson Mandela',
        quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."'
    },
    {
        name: 'Steve Jobs',
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
    },
    {
        name: 'Eleanor Roosevelt',
        quote: '"If life were predictable it would cease to be life, and be without flavor."'
    },
    {
        name: 'Oprah Winfrey',
        quote: "If you look at what you have in life, you'll always have more.If you look at what you don't have in life, you'll never have enough."
    },
    {
        name: 'James Cameron',
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
    },
    {
        name: 'John Lennon',
        quote: "Life is what happens when you're busy making other plans."
    },
    {
        name: 'Mother Teresa',
        quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.'
    },
    {
        name: 'Franklin D. Roosevelt',
        quote: 'When you reach the end of your rope, tie a knot in it and hang on.'
    },
    {
        name: 'Margaret Mead',
        quote: 'Always remember that you are absolutely unique. Just like everyone else.'
    },
    {
        name: 'Robert Louis Stevenson',
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant."
    },
    {
        name: 'Nelson Mandela',
        quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."'
    },
    {
        name: 'Benjamin Franklin',
        quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.'
    },
    {
        name: 'Aristotle',
        quote: 'It is during our darkest moments that we must focus to see the light.'
    },
    {
        name: 'Anne Frank',
        quote: 'Whoever is happy will make others happy too.'
    },
    {
        name: 'Ralph Waldo Emerson',
        quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.'
    },
    {
        name: 'Thomas A. Edison',
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up."
    },
    {
        name: 'Oscar Wilde',
        quote: 'Life is never fair, and perhaps it is a good thing for most of us that it is not.'
    },
    {
        name: 'Dalai Lama',
        quote: 'The purpose of our lives is to be happy.'
    }

]
const boton = document.getElementById('button')
const quote = document.getElementById('quote')
const person = document.getElementById('person')

boton.addEventListener('click', displayQuote)

function displayQuote() {
    let number = Math.floor(Math.random() * quotes.length)
    person.innerHTML = quotes[number].name
    quote.innerHTML = quotes[number].quote
}