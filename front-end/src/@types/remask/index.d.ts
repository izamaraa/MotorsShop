declare module 'remask' {
    const mask: (inputValue: string, patterns: string[]) => string;
    const unMask: (inputValue: string) => string;
}
