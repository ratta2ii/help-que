import React from 'react';

export default function Test2() {

    let parent = {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(12, 1fr)',
        gridColumnGap: '5px',
        gridRowGap: '6px'
    }

    let div1 = {
        gridArea: '1 / 1 / 2 / 13',
        backgroundColor: '#4D9DEO',
        padding: '20px'
    }

    let div2 = {
        gridArea: '2 / 1 / 6 / 4',
        backgroundColor: '#121430',
        padding: '20px'
    }

    let div3 = {
        gridArea: '2 / 10 / 6 / 13',
        backgroundColor: '#E15554',
        padding: '20px'
    }
    let div4 = {
        gridArea: '2 / 4 / 3 / 10',
        backgroundColor: '#3BB273',
        padding: '20px'
    }

    let div5 = {
        gridArea: '3 / 4 / 13 / 10',
        backgroundColor: '#7768AE',
        padding: '20px'
    }

    let div6 = {
        gridArea: '6 / 1 / 13 / 4',
        backgroundColor: 'cornflowerblue',
        padding: '20px'
    }

    let div7 = {
        gridArea: '6 / 10 / 13 / 13',
        backgroundColor: 'style',
        padding: '20px'
    }


    return (
        <div style={parent}>

            <div style={div1}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, molestias!</p>
            </div>
            <div style={div2}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, molestias!</p>
            </div>
            <div style={div3}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, molestias!</p>
            </div>
            <div style={div4}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, molestias!</p>
            </div>
            <div style={div5}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, molestias!</p>
            </div>
            <div style={div6}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, molestias!</p>
            </div>
            <div style={div7}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, molestias!</p>
            </div>

        </div>
    );
}