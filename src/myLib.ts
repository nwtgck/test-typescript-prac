export function myAdd(a: number, b: number): number{
    return a + b;
}

export function stringTimes(str: string, n: number): string{
    let ret = "";
    for(let i = 0; i < n; i++){
        ret += str;
    }
    return ret;
}