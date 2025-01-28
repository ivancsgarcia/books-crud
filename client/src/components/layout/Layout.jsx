import './Layout.css'

export default function Layout({children}) {
    return (
        <>
        <div className="base-container">
            {children}
        </div>
        </>
    )
}