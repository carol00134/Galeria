
const handlerBarsContext = {
    "/index.html": {
    
     "drawers":[
        {
            imgUrl: "https://picsum.photos/id/1025/320/320",
            name: "Imagen 1",
            
        },

        {
            imgUrl: "https://picsum.photos/id/1025/320/320",
            name: "Imagen 2",
            
        },

        {
            imgUrl: "https://picsum.photos/id/1025/320/320",
            name: "Imagen 3",
            
        },

        {
            imgUrl: "https://picsum.photos/id/1025/320/320",
            name: "Imagen 4",
            
        },

        {
            imgUrl: "https://picsum.photos/id/1025/320/320",
            name: "Imagen 5",
            
        },
        {
            imgUrl: "https://picsum.photos/id/1025/320/320",
            name: "Imagen 6",
            
        },
        {
            imgUrl: "https://picsum.photos/id/1025/320/320",
            name: "Imagen 7",
            
        },

        {
            imgUrl: "https://picsum.photos/id/1025/320/320",
            name: "Imagen 8",
            
        },
        {
            imgUrl: "https://picsum.photos/id/1025/320/320",
            name: "Imagen 9",
            
        },

        {
            imgUrl: "https://picsum.photos/id/1025/320/320",
            name: "Imagen 10",
            
        },

        {
            imgUrl: "https://picsum.photos/id/1025/320/320",
            name: "Imagen 11",
            
        },

        {
            imgUrl: "https://picsum.photos/id/1025/320/320",
            name: "Imagen 12",
            
        },

        {
            imgUrl: "https://picsum.photos/id/1025/320/320",
            name: "Imagen 13",
            
        },

        {
            imgUrl: "https://picsum.photos/id/1025/320/320",
            name: "Imagen 14",
            
        },

        {
            imgUrl: "https://picsum.photos/id/1025/320/320",
            name: "Imagen 15",
            
        },
     ]

    },
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;