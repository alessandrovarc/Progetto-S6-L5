const dataMock = [{
    title: "titolo1",
    video: ['media0', 'media1', 'media2', 'media3', 'media4', 'media5', 'media6', 'media7', 'media8', 'media9', 'media10', 'media11']
},
{
    title: "titolo2",
    video: ['media12', 'media13', 'media14', 'media15', 'media16', 'media17', 'media18', 'media19', 'media20', 'media21', 'media22', 'media23']
},
{
    title: "titolo3",
    video: ['media0', 'media1', 'media2', 'media3', 'media4', 'media5', 'media6', 'media7', 'media8', 'media9', 'media10', 'media11']
}
]

const containerMovie = document.getElementById("containerMovie");
console.log('ciao', containerMovie)

for (let i=0; i<dataMock.length;i++) {
    console.log('titolo', dataMock[i].title)//così stampiamo tutti e tre i titoli dell'array di oggetti
    containerMovie.innerHTML(dataMock[i].title);
}
    

