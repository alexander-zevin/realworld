export const splitTags = (tagsString: string): Array<string> => {
    const separator: string = ' '
    return tagsString.split(separator)
}