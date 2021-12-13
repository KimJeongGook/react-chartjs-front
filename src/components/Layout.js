function Layout(props) {
    const { children } = props;
    const layoutStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        border: "1px solid rgba(232,232,232,0.7)",
    }
    const myChildren = children.map((child, cnt) => {
        const childStyle = {
            border: "1px solid rgba(232,232,232,0.7)",
        }
        return (
            <div style={childStyle} key={cnt}>
                {child}
            </div>
        )
    })
    return (
        <div style={layoutStyle}>
            {myChildren}
        </div>
    )
}

export default Layout;