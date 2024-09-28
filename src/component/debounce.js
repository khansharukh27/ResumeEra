function debounce(func,delay){
    let timeId;
    return function(...args){
        if(timeId) clearTimeout(timeId);
        timeId = setTimeout(()=>{
            func.apply(this, args);

        },delay)
    }
}

export default debounce;