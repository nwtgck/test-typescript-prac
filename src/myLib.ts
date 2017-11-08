export function myAdd(a: number, b: number): number{
    return a + b;
}

export function stringTimes(str: string, n: number): string{

    // If n is NOT integer
    if(!(n % 1 === 0)){ // (from: https://stackoverflow.com/a/3886106/2885946)
        throw new Error(`n is not integer, found n is ${n}`);
    }

    let ret = "";
    for(let i = 0; i < n; i++){
        ret += str;
    }
    return ret;
}