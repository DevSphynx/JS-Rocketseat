const booksByCategory = [
    {
        category: "Riquesa",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiosaki e Sharon L. Letcher",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
]

const totalCategories = booksByCategory.length
console.log('Total de categorias: '+ booksByCategory.length);
for(let category of booksByCategory) {
    console.log('Total de livros da Categoria: ', category.category);
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {      //Extraí um elemento e do array chama ele de category
        for(let book of category.books) {
            if (authors.indexOf(book.author) == -1) {       // (Se author não estiver em books.author, ela retorna -1)
                authors.push(book.author)
            }
        }
    }
    console.log('Total de autores: ', authors.length)
}

countAuthors()


function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {      //Extraí um elemento e do array chama ele de category
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do ${author}, ${books.join(", ")}`);
}
booksOfAuthor('Augusto Cury')

