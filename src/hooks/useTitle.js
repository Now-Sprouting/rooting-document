export const useH2Title = (title, describe) => {
    return (
        <>
            <h2 style={{marginBottom: '10px',marginTop: '40px'}}>{title}</h2>
            <p style={{marginBottom: '10px'}}>{describe}</p>
        </>
    )
}
export const useH1Title = (title, describe) => {
    return (
        <>
            <h1 style={{marginBottom: '10px'}}>{title}</h1>
            <p>{describe}</p>
        </>
    )
}