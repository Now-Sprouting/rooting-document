export const toggleTheme = (theme) => {
    if (theme.theme === 'light') {
        theme.setTheme('dark')
    }else {
        theme.setTheme('light')
    }
}