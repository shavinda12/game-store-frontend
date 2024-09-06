
const getOptimizedImageUrl=(imageUrl:string)=>{
    const target="media/"
    const index=imageUrl.indexOf(target)+target.length
    const optimizedUrl=imageUrl.slice(0,index)+"crop/600/400/"+imageUrl.slice(index)
    console.log(optimizedUrl)
    return optimizedUrl;
}

export default getOptimizedImageUrl;