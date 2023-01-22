
export const changeCssVariables = theme => {
    const root = document.querySelector(':root');

    // root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`)   
    // root.style.setProperty('--theme-default-bgimge', `var(--theme-${theme}-bgimge)`)   

    const ccsVariables = ['header', 'bgimge'];

    ccsVariables.forEach(element => {
        root.style.setProperty(
            `--theme-default-${element}`,
            `var(--theme-${theme}-${element})`)   
    })
}