const uniqueID = () => {

    const timeStamp = new Date().getTime();

    const hash =  'xxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });

    return hash+(timeStamp.toString(16).substring(2));
}

export default uniqueID;