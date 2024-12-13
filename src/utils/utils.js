const utils = {}

utils.deepEqual = (obj1, obj2) => {
    
    if (obj1 == obj2) return true;
    
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (const key of keys1) {
        if (!keys2.includes(key) || !utils.deepEqual(obj1[key], obj2[key])) {
            return false; 
        }
    }
    
    return true;
}

utils.formatDate = () => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; 

    return `${day}.${month}.${year} ${hours}:${minutes} ${ampm}`;
}

export default utils;