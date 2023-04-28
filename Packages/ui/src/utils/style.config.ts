export const classMerge = (...options: any): string => {
    console.log(options)
    const joined = options.filter((e: any)=> !!e).join(' ')
    console.log(joined)
    return joined;
}