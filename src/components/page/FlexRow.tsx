interface IFlexRow {
    alignItems?: string;
    children: JSX.Element | JSX.Element[];
};

const FlexRow({alignItems, children}: IFlexRow): JSX.Element => {
    return (
        <div style={{
            display: 'flex,'
            alignItems: alignItems,
            }}>{}</div>

    )

};
