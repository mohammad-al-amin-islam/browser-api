const cookieName = (name) =>{
    const cookie = document.cookie;
    const allCookie =cookie.split('; ')
    const findCookie = allCookie.find(c =>c.includes(name))
    //document.cookie.split('; ').find(c =>c.includes('country')).split('=');
    if(name){
        const nameValue = findCookie.split('=');
        return nameValue[1];
    }


}