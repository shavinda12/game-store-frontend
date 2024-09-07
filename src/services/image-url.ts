import noImageUrl from '../assets/no-image-placeholder-6f3882e0.webp'

const getOptimizedImageUrl=(imageUrl:string)=>{
    let optimizedUrl:string=""
    if(!imageUrl){
        optimizedUrl=noImageUrl
    }
    else{
    const target="media/"
    const index=imageUrl.indexOf(target)+target.length
    optimizedUrl=imageUrl.slice(0,index)+"crop/600/400/"+imageUrl.slice(index)
    console.log(optimizedUrl)
    }
    return optimizedUrl;
}

export default getOptimizedImageUrl;