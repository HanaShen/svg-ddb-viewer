import React from "react";

//ViewerSegment container
export default function Viewer({ svgData }) {
    //SVG display structure for the app
    return (
        <>
            <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(svgData)}`}
                alt="SVG currently being displayed"
                style={{
                    maxWidth: 420, 
                }}
            />
        </>
    );
}
//used for piping SVG data in and rendering it onto the page

