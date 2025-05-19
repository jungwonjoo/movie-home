import { URL} from '../app/(home)/page'

async function getVideo(id:string) {

    console.log(`Fetching videos : ${Date.now()}`)
    await new Promise((resolve)=>setTimeout(resolve, 1000))

    // throw new Error('에러에러에러에러에러!!!!')

    const res = await fetch(`${URL}/${id}/videos`);
    return res.json()
}

export default async function MovieVideo({id}:{id:string}) {

    const videoItem = await getVideo(id)

    return(
        <div>
            {/* {videoItem.map((video) => (
                <iframe 
                    key={video.id} 
                    src={`https://www.youtube.com/embed/${video.key}`} 
                    title={video.name} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                /> 
            ))} */}
        </div>
    )  
}