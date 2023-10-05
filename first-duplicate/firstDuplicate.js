function firstDuplicate(array){
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const comparing = array[j];
            if(current === comparing){
                if(index > j || index === -1){
                   index = j; 
                }
                
            }
        }
    }
    if(index === -1){
        return index;
    }else{
        return array[index];
    }
}