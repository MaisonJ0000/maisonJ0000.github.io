const renderPropAdapter = (children, args) => {
    if (typeof children === 'function') return children(args);
    else return children;
};