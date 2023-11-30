export const requestMapper = (form) => {
    const requestBody = {}
    form.forEach(item => {
        requestBody[item.id] = item.value;
    });

    return requestBody
}