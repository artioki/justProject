const sum = (a:string,b:string,base:number):string =>{
    const ia = parseInt(a,base)
    const ib = parseInt(b,base)
    return (ia+ib).toString(base)
}

export default sum