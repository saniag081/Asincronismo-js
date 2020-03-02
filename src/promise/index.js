const somethingWillHappen = () =>{
    return new Promise((resolve,reject) => {
        if(true){
            resolve('Hey');
        }else{
            reject('Whoooops');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

const somethingWillHappen2 = () =>{
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout(() => {
                resolve('True')
            }, 3000);
        }else{
            const error = new Error('Whoops');
            reject(error);
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response => {
        console.log('Array of reslts', response);
    })
    .catch(err => {
        console.error(err);  
    })
