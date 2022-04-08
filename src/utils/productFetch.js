let is_ok = true;

const productFetch = (time,task) =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(task);
            } else {
                reject("Error in the productFetch")
            }
        },time);
    });
}

export default productFetch;