import axios from "axios"

async function getlist(page){
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    return response.data.results;
}

export const getAnimeList = () => async dispatch => {
    try{
        dispatch({
            type: "animeListLoading"
        })
        
        let list = []
        let lastpage = 34;
        let varpage=1;
        for(varpage=1;varpage<=lastpage;varpage++){
            const newresult = await getlist(varpage);
            list = [...list,...newresult]
        }
        // const list =  await axios.get(`https://rickandmortyapi.com/api/character/?page=${id}`)
        
        
        dispatch({
            type: "animeListLoaded",
            payload: list
        })

    }
    catch(e){
        console.log(e);
        dispatch({
            type: "animeListFailed"
        })
    }


};



export const getAnime = (id) =>async dispatch => {
    try{
        dispatch({
            type: "animeMultipleLoading"
        })
        // const perPage = 10;
        // const offset  = page*perPage - perPage;

        const list = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        
            
        dispatch({
            type: "animeMultipleLoaded",
            payload: list.data,
            Id: id
        })

    }
    catch(e){
        dispatch({
            type: "animeMultipleFailed"
        })
    }


};

export const getLocation = (link) =>async dispatch => {
    try{
        dispatch({
            type: "LocationLoading"
        })
        // const perPage = 10;
        // const offset  = page*perPage - perPage;
        console.log(link);
        const list = await axios.get(link);
               
        dispatch({
            type: "locationLoaded",
            payload: list.data,
            Link: link
        })

    }
    catch(e){
        console.log("catch error");
        dispatch({
            type: "locationFailed"
        })
    }


};

export const getEpisodes = () =>async dispatch => {
    try{
        dispatch({
            type: "EpisodeLoading"
        })
        // const perPage = 10;
        // const offset  = page*perPage - perPage;
        // const list1 = await axios.get("https://rickandmortyapi.com/api/episode?page=1");
        let one ="https://rickandmortyapi.com/api/episode?page=1"
        let two = "https://rickandmortyapi.com/api/episode?page=2"
        let three = "https://rickandmortyapi.com/api/episode?page=3"
        
        const requestOne = await axios.get(one);
        const requestTwo = await axios.get(two);
        const requestThree = await axios.get(three);
        const epilist = await Promise.all([requestOne, requestTwo, requestThree])
        .then(
            axios.spread    ((...responses) => {
                const responseOne = responses[0];
                const responseTwo = responses[1];
                const responesThree = responses[2];
          const epilist = [...responseOne.data.results, ...responseTwo.data.results, ...responesThree.data.results];
          return epilist
        })

            // function([resultone, resulttwo, resultthree]){
            //     return [...resultone,...resulttwo,...resultthree]
            // }
         )

        dispatch({
            type: "EpisodeLoaded",
            payload: epilist,
        })

    }
    catch(e){
        console.log("catch error");
        dispatch({
            type: "EpisodeFailed"
        })
    }


};

// export const getAnimeList = (id) => async dispatch => {
//     try{
//         dispatch({
//             type: "animeListLoading"
//         })
        
//         const list =  await axios.get(`https://rickandmortyapi.com/api/character/?page=${id}`)
        
        
//         dispatch({
//             type: "animeListLoaded",
//             payload: list.data.results
//         })

//     }
//     catch(e){
//         console.log(e);
//         dispatch({
//             type: "animeListFailed"
//         })
//     }


// };