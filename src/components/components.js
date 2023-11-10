import React, { useEffect, useState } from 'react';
import { imageShow } from "../queries/strings/AbQueryStrings";
import './components.css'
var Storage = [];


export const MultiItemTable = (props) => (
    <div>
        <table className="container">
            <thead>
                <tr>
                    {props.column.map(feature => (
                        <th className="blur-title container" key={feature} style={{}}>{props.name[feature] === undefined ? feature : props.name[feature]}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {props.data.map(item => (
                    <tr key={item.id} className="blur-style container">
                        {props.column.map(feature => {
                            if (feature.match(/Uri/) !== null && feature !== null)
                                return <td key={feature} style={{}}><img src={item[feature]} style={{ width: '100px', height: '100px' }} /></td>
                            else
                                return <td className="blur-style" key={feature} style={{}}>{item[feature]}</td>
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)



export const IterationTable = (props) => (
    <table>
        <thead>
            <tr>
                <th key="displayUri">display</th>
                <th key="objkt_id">objkt_id</th>
                <th key="objkt_name">objkt_name</th>
                <th key="objkt_owner_name">objkt_owner_name</th>
                <th key="objkt_rarity">objkt_rarity</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td key="displayUri"><img src={props.data.displayUri} style={{ width: '100px', height: '100px' }} /></td>
                <td key="objkt_id">{props.data.owner_id}</td>
                <td key="objkt_name">{props.data.name}</td>
                <td key="objkt_owner_name">{props.data.owner_name}</td>

                <td key="objkt_rarity">
                    {props.data.features.map(item => (
                        <tr>
                            <td key="Name">{item.name}</td>
                            <td key="rarity">{item.rarity}</td>
                            <td key="value">{item.value}</td>
                        </tr>
                    ))}

                </td>

            </tr>
        </tbody>
    </table>

)



export const SingleItemTable = (props) => (
    // <table>
    //     <thead>
    //         <tr>
    //             {props.column.map(feature => (
    //                 <th key={feature} style={{}}>{feature}</th>
    //             ))}
    //         </tr>
    //     </thead>
    //     <tbody>
    //         <tr>
    //             {props.column.map(feature => {
    //                 if ((feature.match(/Uri/) !== null || feature.match(/image/)) && feature !== null)
    //                     return <td key={feature} style={{}}><img src={props.data[feature]} style={{ width: '100px', height: '100px' }} /></td>
    //                 else
    //                     return <td key={feature} style={{}}>{props.data[feature]}</td>
    //             })}
    //         </tr>
    //     </tbody>
    // </table>

    <div className="drop-card relative overflow-hidden rounded-2xl width-20" style={{ display:"flex",flexWrap:"wrap", display:"inline-block", padding:"0 0 0 10px"}}>
        <a className="bg-center block bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition duration-700 dark:text-white relative rounded-2xl w-full" href="/collections/speak-to-me-by-lisa-orth">
            <div className="z-10 rounded-2xl relative flex flex-col justify-between h-full w-full overflow-hidden">
                <div className="w-full h-72 mt-4 flex flex-col items-center justify-center">
                    <div style={{ width: "238.5px", height: "168.67px" }}>
                            {props.column.map(feature => {
                                                if ((feature.match(/Uri/) !== null || feature.match(/image/)) && feature !== null)
                                                    return <img className="w-full h-full shadow-xl transform scale-95 hover:scale-100 transition duration-300" src={props.data[feature]} />
                                            })}
                    </div>
                </div>
                <div className="p-8 pt-4">
                    <h3 className="text-2xl line-clamp-1 text-neutral-900 dark:text-white font-medium tracking-tighter mb-1">
                        {props.data.name}
                    </h3>
                    <p className="text-lg line-clamp-1 text-neutral-600 dark:text-neutral-400 mb-4">
                        {props.data.description}
                    </p>
                    <div className="text-neutral-900 dark:bg-neutral-700 dark:text-white inline-block bg-white rounded-full p-1 pl-2 pr-3">
                        <div className="flex items-center gap-2 h-full w-full">
                            <img src="chromie.svg" className="h-4 w-4 rounded-full" alt="Chromie" />
                            <p className="text-sm">Art Blocks</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between mb-3">
                            <div className="text-neutral-900 dark:text-neutral-300 flex items-center gap-1">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M12 8V12L14 14"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <p>2 Fri, 6:00 PM</p>
                            </div>
                            <p className="text-neutral-900 dark:text-neutral-300">4 / 10K+</p>
                        </div>
                        <div className="w-full overflow-hidden h-3 relative rounded-full bg-neutral-200 dark:bg-neutral-700">
                            <div
                                className="h-3 top-0 left-0 absolute rounded-tl-full rounded-bl-full bg-neutral-900 dark:bg-white"
                                style={{ width: "0.0004%" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </a >
    </div >
)

export const Table = (props) => (
    <table>
        <tbody>
            {props.data.map(feature => {
                const tags = [];
                for (let i in feature) {
                    tags.push(<tr key={`${i},${feature[i]}`}>
                        <td>{i}</td><td>{feature[i]}</td>
                    </tr>);
                }
                return <td>{tags}</td>;

            })}
        </tbody>
    </table>
)


export const AbListTable = (props) => {
    const [Storage, setStorage] = useState({});

    useEffect(() => {
        // 异步获取图片并存储到Storage对象中
        const getImage = async (item) => {
            try {
                const response = await imageShow(item);
                setStorage((prevStorage) => ({
                    ...prevStorage,
                    [item.id]: response !== undefined ? response : '',
                }));
            } catch (error) {
                console.error(error);
            }
        };

        props.data.forEach((item) => {
            getImage(item);
        });
    }, [props.data]);

    return (
        <div>
            <table className="container">
                <thead>
                    <tr>
                        <th></th>
                        {props.column.map((feature) => (
                            <th className="blur-title" key={feature} style={{}}>
                                {feature}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item) => (
                        <tr key={item.id} className="blur-style">
                            <td>
                                <img
                                    src={Storage[item.id]}
                                    style={{ height: 100, width: 100 }}
                                    alt=""
                                />
                            </td>
                            {props.column.map((feature) => (
                                <td key={feature} className="blur-style" style={{}}>
                                    {item[feature]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

