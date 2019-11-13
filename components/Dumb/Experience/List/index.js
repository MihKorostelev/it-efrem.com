export function List({data, preKey = 0}) {
    return (
        <ul>
            {data.map((item, idx) => {
                    const key = `${preKey}-${idx}`;

                    if (typeof item === 'string') {
                        return <li key={key}><span>{item}</span></li>
                    } else {
                        return <List data={item} preKey={idx}/>
                    }
                }
            )}
        </ul>
    );
}